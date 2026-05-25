import type { SurveyStats } from "./survey-types";

const q1 = [
  { label: "2", value: 4 },
  { label: "3", value: 1 },
  { label: "4", value: 5 },
  { label: "5", value: 10 },
  { label: "6", value: 12 },
  { label: "7", value: 6 },
  { label: "8", value: 2 },
  { label: "9", value: 1 },
  { label: "10", value: 4 },
];

const q2 = [
  { label: "Excelente", value: 2 },
  { label: "Boa", value: 8 },
  { label: "Regular", value: 15 },
  { label: "Ruim", value: 15 },
  { label: "Péssima", value: 9 },
];

const q3 = [
  { label: "Sim", value: 43 },
  { label: "Não", value: 6 },
];

const q4 = [
  { label: "Sim", value: 26 },
  { label: "Não", value: 23 },
];

const q5 = [
  { label: "Com certeza", value: 42 },
  { label: "Sim", value: 4 },
  { label: "Talvez", value: 1 },
  { label: "Não", value: 2 },
];

function sum(items: { value: number }[]) {
  return items.reduce((acc, item) => acc + item.value, 0);
}

const q1Total = sum(q1);
const q3Total = sum(q3);
const q4Total = sum(q4);
const q5Total = sum(q5);

export const FALLBACK_SURVEY_STATS: SurveyStats = {
  q1,
  q2,
  q3,
  q4,
  q5,
  totalResponses: q1Total,
  q1Avg: (q1.reduce((acc, item) => acc + Number(item.label) * item.value, 0) / q1Total).toFixed(1),
  q3SimPct: Math.round((43 / q3Total) * 100),
  q4SimPct: Math.round((26 / q4Total) * 100),
  q5SupportPct: Math.round(((42 + 4) / q5Total) * 100),
};
