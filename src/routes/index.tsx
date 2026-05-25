import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Activity, ArrowRight, BarChart3, RefreshCw, TrendingUp, Users } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { AccessibilityMenu } from "@/components/AccessibilityMenu";
import { BarsChart, DonutChart } from "@/components/Charts";
import { Credits } from "@/components/Credits";
import { CustomCursor } from "@/components/CustomCursor";
import { GoogleFormEmbed } from "@/components/GoogleFormEmbed";
import { SiteNav } from "@/components/SiteNav";
import { TechBackground } from "@/components/TechBackground";
import { pct } from "@/lib/survey-types";
import { fetchSurveyStats } from "@/server/survey";

export const Route = createFileRoute("/")({
  loader: () => fetchSurveyStats(),
  component: Index,
});

function Index() {
  const router = useRouter();
  const stats = Route.useLoaderData();
  const {
    q1,
    q2,
    q3,
    q4,
    q5,
    totalResponses,
    q1Avg,
    q3SimPct,
    q4SimPct,
    q5SupportPct,
    source,
    updatedAt,
    fetchError,
  } = stats;

  const q2Total = q2.reduce((acc, item) => acc + item.value, 0);
  const q5Total = q5.reduce((acc, item) => acc + item.value, 0);
  const negativeSidewalks = q2
    .filter((item) => ["Regular", "Ruim", "Péssima"].includes(item.label))
    .reduce((acc, item) => acc + item.value, 0);

  return (
    <main id="top" className="relative min-h-dvh w-full max-w-[100vw] overflow-x-hidden scanlines">
      <CustomCursor />
      <SiteNav />
      <AccessibilityMenu />

      <section className="section-anchor relative isolate min-h-[85dvh] px-4 pb-12 pt-24 sm:min-h-dvh sm:px-6 sm:pb-16 sm:pt-28">
        <TechBackground />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1.1fr_1fr]">
          <article className="hud-panel rounded-3xl p-6 sm:p-10">
            <div className="text-[11px] uppercase tracking-[0.3em] text-primary/80">
              acessibilidade urbana · Araucária 2026
            </div>
            <h1 className="mt-5 text-balance text-3xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
              Araucária<span className="neon-title"> · PcD</span>
              <span className="mt-2 block text-foreground/90">
                inclusão nas ruas, dados na prática
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Pesquisa e painel interativo para mostrar como pessoas com mobilidade reduzida
              vivenciam calçadas, travessias e rotas no dia a dia.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#painel"
                className="neon-btn inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold sm:w-auto"
              >
                abrir painel
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <a
                href="#formulario"
                className="inline-flex w-full items-center justify-center rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary sm:w-auto"
              >
                responder pesquisa
              </a>
            </div>
          </article>

          <aside className="hud-panel tech-line relative rounded-3xl px-6 py-7">
            <div className="text-[11px] uppercase tracking-[0.26em] text-primary/75">
              feed operacional
            </div>
            <div className="mt-5 space-y-4">
              <LiveData label="respostas registradas" value={String(totalResponses)} />
              <LiveData label="nota média de acessibilidade" value={`${q1Avg}/10`} />
              <LiveData label="relatam barreiras nas calçadas" value={`${q3SimPct}%`} />
              <LiveData label="pedem mais investimento" value={`${q5SupportPct}%`} />
            </div>
          </aside>
        </div>
      </section>

      <section id="contexto" className="section-anchor px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="hud-panel rounded-3xl p-6 sm:p-8">
            <SectionTag text="origem do estudo" />
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Da sala de aula para o território
            </h2>
            <p className="mt-4 text-muted-foreground">
              Em meio a uma feira de ciências sobre mobilidade reduzida, o aluno Carlos Eduardo Schafranski Ferreira junto com a orientação do professor Daniel Felipe Meurer, realizaram uma pesquisa sobre a acessibilidade urbana em Araucária.
            </p>
           
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ContextCard
              title="Coleta"
              desc="Questionário no Google Forms aplicado a estudantes."
            />
            <ContextCard title="Leitura" desc="Interpretação visual para apoiar decisão pública." />
            <ContextCard title="Foco" desc="Acessibilidade de PcD em trajeto urbano real." />
            <ContextCard title="Entrega" desc="Painel técnico com evidências." />
          </div>
        </div>
      </section>

      <GoogleFormEmbed />

      <section id="painel" className="section-anchor px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div className="min-w-0 flex-1">
              <SectionTag text="painel de dados" />
              <h2 className="mt-4 text-balance text-2xl font-bold sm:text-4xl lg:text-5xl">
                Dashboard de acessibilidade urbana
              </h2>
            </div>
            <button
              type="button"
              className="neon-btn inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold sm:w-auto"
              onClick={() => router.invalidate()}
            >
              <RefreshCw className="h-4 w-4" />
              atualizar dados
            </button>
          </div>

          <DataSourceBadge
            className="mt-4"
            source={source}
            updatedAt={updatedAt}
            fetchError={fetchError}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Kpi icon={Users} label="Respondentes" value={String(totalResponses)} />
            <Kpi icon={BarChart3} label="Média geral" value={`${q1Avg}`} />
            <Kpi icon={Activity} label="Barreiras na rota" value={`${q3SimPct}%`} />
            <Kpi icon={TrendingUp} label="Apoio ao investimento" value={`${q5SupportPct}%`} />
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            <Panel title="Avaliação geral das vias">
              <BarsChart data={q1} />
            </Panel>
            <Panel title="Qualidade das calçadas">
              <BarsChart data={q2} highlight={["Regular", "Ruim", "Péssima"]} />
            </Panel>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Panel title="Obstáculos no deslocamento">
              <DonutChart data={q3} />
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {q3SimPct}% dos respondentes percebem obstáculos frequentes nas calçadas.
              </p>
            </Panel>
            <Panel title="Semáforos acessíveis para PcD">
              <DonutChart data={q4} />
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {q4SimPct}% consideram o tempo dos semáforos adequado para travessia segura.
              </p>
            </Panel>
          </div>

          <div className="mt-6">
            <Panel title="Investimento público em acessibilidade">
              <BarsChart data={q5} />
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {q5.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-primary/20 bg-secondary px-3 py-2"
                  >
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="mt-1 text-lg font-bold text-primary">
                      {item.value}
                      <span className="ml-1 text-xs text-muted-foreground">
                        · {pct(item.value, q5Total)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </section>

      <section id="leituras" className="section-anchor px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTag text="leituras técnicas" />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Insight
              title="Barreira estrutural"
              desc={`${q3SimPct}% identificam interrupções em rotas de caminhada.`}
            />
            <Insight
              title="Calçadas críticas"
              desc={`${pct(negativeSidewalks, q2Total)}% classificaram as calçadas em nível negativo.`}
            />
            <Insight
              title="Demanda clara"
              desc={`${q5SupportPct}% defendem mais investimento público em acessibilidade.`}
            />
            <Insight
              title="Percepção geral"
              desc={`Nota média de ${q1Avg}/10 indica cenário ainda abaixo do ideal.`}
            />
            <Insight
              title="Semáforos"
              desc={`${q4SimPct}% consideram os tempos de travessia acessíveis para PcD.`}
            />
            <Insight
              title="Próximo passo"
              desc="As evidências apontam para ações urbanas de curto prazo."
            />
          </div>
        </div>
      </section>

      <section className="section-anchor px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="hud-panel rounded-3xl p-7 sm:p-10">
            <SectionTag text="síntese final" />
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Acessibilidade não é detalhe, é infraestrutura básica...
            </h2>
            <p className="mt-4 max-w-4xl text-muted-foreground">
              Os dados da pesquisa mostram que a cidade tem forte potencial, mas ainda com diversas lacunas
              concretas para pessoas com mobilidade reduzida. O cenário exige investimento contínuo,
              revisão de travessias e padrão técnico de calçadas em toda a malha urbana.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <TerminalData label="Média geral" value={`${q1Avg}/10`} />
              <TerminalData label="Obstáculos relatados" value={`${q3SimPct}%`} />
              <TerminalData label="Apoio a melhorias" value={`${q5SupportPct}%`} />
            </div>
          </div>
        </div>
      </section>

      <Credits />
    </main>
  );
}

function DataSourceBadge({
  source,
  updatedAt,
  fetchError,
  className = "",
}: {
  source: "live" | "static";
  updatedAt: string | null;
  fetchError?: string;
  className?: string;
}) {
  const label =
    source === "live"
      ? `dados ao vivo${updatedAt ? ` · ${new Date(updatedAt).toLocaleString("pt-BR")}` : ""}`
      : "dados de referência (planilha não conectada)";

  return (
    <div
      className={`rounded-lg border border-primary/25 bg-secondary px-3 py-2.5 text-xs ${className}`}
    >
      <span className="font-medium text-foreground">{label}</span>
      {fetchError && (
        <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{fetchError}</p>
      )}
    </div>
  );
}

function SectionTag({ text }: { text: string }) {
  return (
    <div className="inline-flex rounded-sm border border-primary/35 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary">
      {text}
    </div>
  );
}

function LiveData({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-primary/20 bg-secondary/70 px-4 py-3">
      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-3xl font-bold text-primary">{value}</div>
    </div>
  );
}

function ContextCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="hud-panel rounded-2xl p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </article>
  );
}

function Kpi({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <article className="hud-panel rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="mt-2 text-3xl font-black text-primary sm:text-4xl">{value}</div>
    </article>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="hud-panel min-w-0 overflow-hidden rounded-3xl p-4 sm:p-6">
      <h3 className="text-xs uppercase tracking-[0.2em] text-primary/80 sm:text-sm sm:tracking-[0.23em]">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </article>
  );
}

function Insight({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="hud-panel rounded-2xl p-5">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </article>
  );
}

function TerminalData({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-primary/20 bg-secondary/70 px-4 py-3">
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-bold text-primary">{value}</div>
    </div>
  );
}
