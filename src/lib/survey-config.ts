/** URL pública da planilha de respostas (Google Forms → Sheets). */
export const DEFAULT_SURVEY_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1nZyjO2-6i4mJBUDk9DGKnktilaP2tu6aoyWQfWB8cTg/gviz/tq?tqx=out:csv";

export function getSurveySheetCsvUrl() {
  return process.env.SURVEY_SHEET_CSV_URL?.trim() || DEFAULT_SURVEY_SHEET_CSV_URL;
}
