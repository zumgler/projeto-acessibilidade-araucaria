import { GraduationCap, School, UserSquare2, Users2 } from "lucide-react";

export function Credits() {
  return (
    <section id="credits" className="section-anchor relative px-4 pb-20 pt-12 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="hud-panel relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div aria-hidden className="absolute inset-0 tech-grid opacity-40" />
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-primary/80">
                / créditos · 04
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="text-gradient">Quem construiu este projeto.</span>
              </h2>
              
              <div className="mt-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-[11px] leading-snug text-primary">
                <span>{"</>"}</span>
                <span className="break-words">
                  desenvolvido por Carlos Eduardo Schafranski Ferreira
                </span>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              <CreditCard index="01" icon={Users2} label="Turma" value="2º D — Ensino Médio" />
              <CreditCard
                index="02"
                icon={UserSquare2}
                label="Orientação"
                value="Prof. Daniel Felipe Meurer"
              />
              <CreditCard
                index="03"
                icon={School}
                label="Instituição"
                value="Colégio Estadual Fazenda Velha"
              />
              <CreditCard
                index="04"
                icon={GraduationCap}
                label="Programa"
                value="Projeto Integrador · SEED - Secretaria da Educação do Paraná"
              />
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} — ❤ Feito à mão por Carlos Eduardo Schafranski Ferreira ❤
        </p>
      </div>
    </section>
  );
}

function CreditCard({
  index,
  icon: Icon,
  label,
  value,
}: {
  index: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <li className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_8px_24px_rgba(12,34,48,0.18)]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70">/ {index}</span>
        <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
      <div className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold leading-snug text-foreground sm:text-base">
        {value}
      </div>
    </li>
  );
}
