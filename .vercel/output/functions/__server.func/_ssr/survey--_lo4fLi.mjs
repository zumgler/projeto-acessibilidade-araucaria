import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-CD4j9COQ.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const q1 = [
  { label: "2", value: 4 },
  { label: "3", value: 1 },
  { label: "4", value: 5 },
  { label: "5", value: 10 },
  { label: "6", value: 12 },
  { label: "7", value: 6 },
  { label: "8", value: 2 },
  { label: "9", value: 1 },
  { label: "10", value: 4 }
];
const q2 = [
  { label: "Excelente", value: 2 },
  { label: "Boa", value: 8 },
  { label: "Regular", value: 15 },
  { label: "Ruim", value: 15 },
  { label: "Péssima", value: 9 }
];
const q3 = [
  { label: "Sim", value: 43 },
  { label: "Não", value: 6 }
];
const q4 = [
  { label: "Sim", value: 26 },
  { label: "Não", value: 23 }
];
const q5 = [
  { label: "Com certeza", value: 42 },
  { label: "Sim", value: 4 },
  { label: "Talvez", value: 1 },
  { label: "Não", value: 2 }
];
function sum(items) {
  return items.reduce((acc, item) => acc + item.value, 0);
}
const q1Total = sum(q1);
const q3Total = sum(q3);
const q4Total = sum(q4);
const q5Total = sum(q5);
const FALLBACK_SURVEY_STATS = {
  q1,
  q2,
  q3,
  q4,
  q5,
  totalResponses: q1Total,
  q1Avg: (q1.reduce((acc, item) => acc + Number(item.label) * item.value, 0) / q1Total).toFixed(1),
  q3SimPct: Math.round(43 / q3Total * 100),
  q4SimPct: Math.round(26 / q4Total * 100),
  q5SupportPct: Math.round((42 + 4) / q5Total * 100)
};
const Q2_LABELS = ["Excelente", "Boa", "Regular", "Ruim", "Péssima"];
const Q5_LABELS = ["Com certeza", "Sim", "Talvez", "Não"];
function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(new RegExp("\\p{Diacritic}", "gu"), "").trim();
}
function parseCsv(text) {
  const rows = [];
  let row = [];
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
function findColumn(headers, keywords) {
  const normalizedKeywords = keywords.map(normalize);
  return headers.findIndex((header) => {
    const normalizedHeader = normalize(header);
    return normalizedKeywords.some((keyword) => normalizedHeader.includes(keyword));
  });
}
function countByLabels(values, labels) {
  const counts = new Map(labels.map((label) => [label, 0]));
  for (const raw of values) {
    const value = raw.trim();
    if (!value) continue;
    const match = labels.find((label) => normalize(label) === normalize(value));
    if (match) counts.set(match, (counts.get(match) ?? 0) + 1);
  }
  return labels.map((label) => ({ label, value: counts.get(label) ?? 0 }));
}
function countYesNo(values) {
  let sim = 0;
  let nao = 0;
  for (const raw of values) {
    const value = normalize(raw);
    if (value.startsWith("sim")) sim++;
    else if (value.startsWith("nao") || value.startsWith("não")) nao++;
  }
  return [
    { label: "Sim", value: sim },
    { label: "Não", value: nao }
  ];
}
function countRatings(values) {
  const counts = /* @__PURE__ */ new Map();
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
function yesPct(items) {
  const total = items.reduce((acc, item) => acc + item.value, 0);
  const sim = items.find((item) => normalize(item.label).startsWith("sim"))?.value ?? 0;
  return total === 0 ? 0 : Math.round(sim / total * 100);
}
function supportPct(items) {
  const total = items.reduce((acc, item) => acc + item.value, 0);
  const support = (items.find((item) => normalize(item.label) === "com certeza")?.value ?? 0) + (items.find((item) => normalize(item.label) === "sim")?.value ?? 0);
  return total === 0 ? 0 : Math.round(support / total * 100);
}
function averageRating(items) {
  const total = items.reduce((acc, item) => acc + item.value, 0);
  if (total === 0) return "0.0";
  const weighted = items.reduce((acc, item) => acc + Number(item.label) * item.value, 0);
  return (weighted / total).toFixed(1);
}
function parseSurveyCsv(csvText) {
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
  const columnValues = (index) => dataRows.map((row) => row[index] ?? "");
  const q12 = countRatings(columnValues(q1Index));
  const q22 = countByLabels(columnValues(q2Index), Q2_LABELS);
  const q32 = countYesNo(columnValues(q3Index));
  const q42 = countYesNo(columnValues(q4Index));
  const q52 = countByLabels(columnValues(q5Index), Q5_LABELS);
  return {
    q1: q12,
    q2: q22,
    q3: q32,
    q4: q42,
    q5: q52,
    totalResponses: dataRows.length,
    q1Avg: averageRating(q12),
    q3SimPct: yesPct(q32),
    q4SimPct: yesPct(q42),
    q5SupportPct: supportPct(q52)
  };
}
function getSheetCsvUrl() {
  return process.env.SURVEY_SHEET_CSV_URL?.trim() || "";
}
const fetchSurveyStats_createServerFn_handler = createServerRpc({
  id: "22187acff0948f08134436b7a7987b3d033f0a4c627c39df38be211a6570cabf",
  name: "fetchSurveyStats",
  filename: "src/server/survey.ts"
}, (opts) => fetchSurveyStats.__executeServer(opts));
const fetchSurveyStats = createServerFn({
  method: "GET"
}).handler(fetchSurveyStats_createServerFn_handler, async () => {
  const sheetUrl = getSheetCsvUrl();
  if (!sheetUrl) {
    return {
      ...FALLBACK_SURVEY_STATS,
      source: "static",
      updatedAt: null,
      fetchError: "Defina SURVEY_SHEET_CSV_URL com o link CSV da planilha de respostas do Google Forms."
    };
  }
  try {
    const response = await fetch(sheetUrl, {
      headers: {
        Accept: "text/csv"
      },
      cache: "no-store"
    });
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        throw new Error("Planilha sem acesso público. No Google Sheets: Compartilhar → Acesso geral → Leitor.");
      }
      throw new Error(`Falha ao buscar planilha (${response.status}).`);
    }
    const csv = await response.text();
    const stats = parseSurveyCsv(csv);
    return {
      ...stats,
      source: "live",
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro desconhecido.";
    return {
      ...FALLBACK_SURVEY_STATS,
      source: "static",
      updatedAt: null,
      fetchError: message
    };
  }
});
export {
  fetchSurveyStats_createServerFn_handler
};
