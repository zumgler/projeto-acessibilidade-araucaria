import type { SurveyChartItem, SurveyStats } from "./survey-types";

const Q2_LABELS = ["Excelente", "Boa", "Regular", "Ruim", "Péssima"] as const;
const Q5_LABELS = ["Com certeza", "Sim", "Talvez", "Não"] as const;

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field.trim());
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i++;
      row.push(field.trim());
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field.trim());
    if (row.some((cell) => cell.length > 0)) rows.push(row);
  }

  return rows;
}

function findColumn(headers: string[], keywords: string[]) {
  const normalizedKeywords = keywords.map(normalize);
  return headers.findIndex((header) => {
    const normalizedHeader = normalize(header);
    return normalizedKeywords.some((keyword) => normalizedHeader.includes(keyword));
  });
}

function countByLabels(values: string[], labels: readonly string[]) {
  const counts = new Map(labels.map((label) => [label, 0]));
  for (const raw of values) {
    const value = raw.trim();
    if (!value) continue;
    const match = labels.find((label) => normalize(label) === normalize(value));
    if (match) counts.set(match, (counts.get(match) ?? 0) + 1);
  }
  return labels.map((label) => ({ label, value: counts.get(label) ?? 0 }));
}

function countYesNo(values: string[]) {
  let sim = 0;
  let nao = 0;
  for (const raw of values) {
    const value = normalize(raw);
    if (value.startsWith("sim")) sim++;
    else if (value.startsWith("nao") || value.startsWith("não")) nao++;
  }
  return [
    { label: "Sim", value: sim },
    { label: "Não", value: nao },
  ] satisfies SurveyChartItem[];
}

function countRatings(values: string[]) {
  const counts = new Map<string, number>();
  for (const raw of values) {
    const rating = raw.trim().match(/\d+/)?.[0];
    if (!rating) continue;
    const numeric = Number(rating);
    if (numeric < 1 || numeric > 10) continue;
    counts.set(String(numeric), (counts.get(String(numeric)) ?? 0) + 1);
  }
  return Array.from({ length: 10 }, (_, index) => {
    const label = String(index + 1);
    return { label, value: counts.get(label) ?? 0 };
  }).filter((item) => item.value > 0);
}

function yesPct(items: SurveyChartItem[]) {
  const total = items.reduce((acc, item) => acc + item.value, 0);
  const sim = items.find((item) => normalize(item.label).startsWith("sim"))?.value ?? 0;
  return total === 0 ? 0 : Math.round((sim / total) * 100);
}

function supportPct(items: SurveyChartItem[]) {
  const total = items.reduce((acc, item) => acc + item.value, 0);
  const support =
    (items.find((item) => normalize(item.label) === "com certeza")?.value ?? 0) +
    (items.find((item) => normalize(item.label) === "sim")?.value ?? 0);
  return total === 0 ? 0 : Math.round((support / total) * 100);
}

function averageRating(items: SurveyChartItem[]) {
  const total = items.reduce((acc, item) => acc + item.value, 0);
  if (total === 0) return "0.0";
  const weighted = items.reduce((acc, item) => acc + Number(item.label) * item.value, 0);
  return (weighted / total).toFixed(1);
}

export function parseSurveyCsv(csvText: string): SurveyStats {
  const rows = parseCsv(csvText);
  if (rows.length < 2) {
    throw new Error("Planilha sem respostas.");
  }

  const headers = rows[0];
  const dataRows = rows.slice(1).filter((row) => row.some((cell) => cell.trim().length > 0));

  const q1Index = findColumn(headers, ["avaliacao geral", "condicoes de acessibilidade"]);
  const q2Index = findColumn(headers, ["qualidade das calcadas", "mobilidade reduzida"]);
  const q3Index = findColumn(headers, ["obstaculos", "interrupcoes"]);
  const q4Index = findColumn(headers, ["semaforos", "semaforo", "pcd"]);
  const q5Index = findColumn(headers, ["prefeitura", "investir mais"]);

  if ([q1Index, q2Index, q3Index, q4Index, q5Index].some((index) => index < 0)) {
    throw new Error("Colunas do formulário não encontradas na planilha.");
  }

  const columnValues = (index: number) => dataRows.map((row) => row[index] ?? "");

  const q1 = countRatings(columnValues(q1Index));
  const q2 = countByLabels(columnValues(q2Index), Q2_LABELS);
  const q3 = countYesNo(columnValues(q3Index));
  const q4 = countYesNo(columnValues(q4Index));
  const q5 = countByLabels(columnValues(q5Index), Q5_LABELS);

  return {
    q1,
    q2,
    q3,
    q4,
    q5,
    totalResponses: dataRows.length,
    q1Avg: averageRating(q1),
    q3SimPct: yesPct(q3),
    q4SimPct: yesPct(q4),
    q5SupportPct: supportPct(q5),
  };
}
