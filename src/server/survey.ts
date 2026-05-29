import { createServerFn } from "@tanstack/react-start";
import { getSurveySheetCsvUrl } from "@/lib/survey-config";
import { FALLBACK_SURVEY_STATS } from "@/lib/survey-fallback";
import { parseSurveyCsv } from "@/lib/parse-survey-csv";
import type { SurveyStatsPayload } from "@/lib/survey-types";

export const fetchSurveyStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<SurveyStatsPayload> => {
    const sheetUrl = getSurveySheetCsvUrl();

    try {
      const response = await fetch(sheetUrl, {
        headers: { Accept: "text/csv" },
        cache: "no-store",
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          throw new Error(
            "Planilha sem acesso público. No Google Sheets: Compartilhar → Acesso geral → Leitor.",
          );
        }
        throw new Error(`Falha ao buscar planilha (${response.status}).`);
      }

      const csv = await response.text();
      const stats = parseSurveyCsv(csv);

      return {
        ...stats,
        source: "live",
        updatedAt: new Date().toISOString(),
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro desconhecido.";
      return {
        ...FALLBACK_SURVEY_STATS,
        source: "static",
        updatedAt: null,
        fetchError: message,
      };
    }
  },
);
