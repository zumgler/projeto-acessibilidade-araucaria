export type SurveyChartItem = { label: string; value: number };

export type SurveyStats = {
  q1: SurveyChartItem[];
  q2: SurveyChartItem[];
  q3: SurveyChartItem[];
  q4: SurveyChartItem[];
  q5: SurveyChartItem[];
  totalResponses: number;
  q1Avg: string;
  q3SimPct: number;
  q4SimPct: number;
  q5SupportPct: number;
};

export type SurveyStatsPayload = SurveyStats & {
  source: "live" | "static";
  updatedAt: string | null;
  fetchError?: string;
};

export function pct(value: number, total: number) {
  if (total === 0) return "0.0";
  return ((value / total) * 100).toFixed(1);
}
