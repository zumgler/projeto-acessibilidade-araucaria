export const GOOGLE_FORM_PUBLIC_URL = "https://forms.gle/grHf46u2hcgJYCRHA";

export const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdW9uwlSuTmEZWP0TEVpQ1uOVC4yHVJ7lg0Rxj3YE26ZqjeGw/viewform?embedded=true";

export function GoogleFormEmbed() {
  return (
    <section id="formulario" className="section-anchor px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="hud-panel rounded-3xl p-6 sm:p-8">
          <div className="text-[11px] uppercase tracking-[0.26em] text-primary/80">
            sua voz conta · questionário aberto
          </div>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Responder pesquisa de acessibilidade
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            As respostas são enviadas ao Google Forms e sincronizadas com a planilha vinculada. O
            painel do site lê essa planilha para atualizar os gráficos.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Questionário sobre acessibilidade em Araucária"
              src={GOOGLE_FORM_EMBED_URL}
              width="100%"
              height="1685"
              className="min-h-[520px] w-full border-0 sm:min-h-[640px] lg:min-h-[720px]"
              loading="lazy"
            >
              Carregando…
            </iframe>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={GOOGLE_FORM_PUBLIC_URL}
              target="_blank"
              rel="noreferrer"
              className="neon-btn inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold"
            >
              abrir formulário em nova aba
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
