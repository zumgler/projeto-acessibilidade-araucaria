import { useEffect, useState } from "react";
import { Accessibility, Contrast, Minus, Plus, RotateCcw, Sparkles, Type, X } from "lucide-react";
import {
  applyAccessibilitySettings,
  DEFAULT_ACCESSIBILITY,
  loadAccessibilitySettings,
  saveAccessibilitySettings,
  type AccessibilitySettings,
} from "@/lib/accessibility";

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_ACCESSIBILITY);

  useEffect(() => {
    const saved = loadAccessibilitySettings();
    setSettings(saved);
    applyAccessibilitySettings(saved);
  }, []);

  useEffect(() => {
    applyAccessibilitySettings(settings);
    saveAccessibilitySettings(settings);
  }, [settings]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const update = (patch: Partial<AccessibilitySettings>) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  };

  const reset = () => setSettings(DEFAULT_ACCESSIBILITY);

  return (
    <>
      <button
        type="button"
        className="a11y-fab neon-btn fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold shadow-lg sm:bottom-6 sm:right-6"
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Abrir configurações de acessibilidade"
        onClick={() => setOpen(true)}
      >
        <Accessibility className="h-5 w-5" />
        <span className="hidden sm:inline">Acessibilidade</span>
      </button>

      {open && (
        <div className="a11y-overlay fixed inset-0 z-[70] flex items-end justify-center bg-slate-900/50 p-0 backdrop-blur-sm sm:items-center sm:p-4">
          <div
            id="a11y-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-title"
            className="a11y-panel hud-panel flex max-h-[92dvh] w-full max-w-lg flex-col rounded-t-2xl sm:rounded-2xl"
          >
            <div className="flex items-center justify-between border-b border-primary/25 px-5 py-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary/80">
                  preferências
                </p>
                <h2 id="a11y-title" className="text-lg font-bold">
                  Acessibilidade do site
                </h2>
              </div>
              <button
                type="button"
                className="neon-btn inline-flex h-9 w-9 items-center justify-center rounded-md"
                aria-label="Fechar painel de acessibilidade"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 overflow-y-auto px-5 py-5">
              <section className="a11y-section">
                <div className="a11y-section-title">
                  <Type className="h-4 w-4 text-primary" />
                  Tamanho do texto
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Ajuste o tamanho de toda a leitura do site ({settings.fontScale}%).
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    className="neon-btn inline-flex h-10 w-10 items-center justify-center rounded-md"
                    aria-label="Diminuir texto"
                    onClick={() => update({ fontScale: Math.max(80, settings.fontScale - 10) })}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="range"
                    min={80}
                    max={140}
                    step={5}
                    value={settings.fontScale}
                    aria-label="Tamanho da fonte"
                    className="a11y-range flex-1"
                    onChange={(event) => update({ fontScale: Number(event.target.value) })}
                  />
                  <button
                    type="button"
                    className="neon-btn inline-flex h-10 w-10 items-center justify-center rounded-md"
                    aria-label="Aumentar texto"
                    onClick={() => update({ fontScale: Math.min(140, settings.fontScale + 10) })}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </section>

              <section className="a11y-section">
                <div className="a11y-section-title">
                  <Contrast className="h-4 w-4 text-primary" />
                  Visual
                </div>
                <ToggleRow
                  label="Alto contraste"
                  description="Mais contraste entre texto e fundo."
                  pressed={settings.highContrast}
                  onToggle={() => update({ highContrast: !settings.highContrast })}
                />
              </section>

              <section className="a11y-section">
                <div className="a11y-section-title">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Movimento
                </div>
                <ToggleRow
                  label="Reduzir animações"
                  description="Desativa animações, scanlines e efeitos em movimento."
                  pressed={settings.reduceMotion}
                  onToggle={() => update({ reduceMotion: !settings.reduceMotion })}
                />
              </section>

              <p className="rounded-lg border border-primary/20 bg-secondary px-3 py-2 text-xs text-muted-foreground">
                Suas preferências são salvas neste dispositivo e aplicadas automaticamente na
                próxima visita.
              </p>
            </div>

            <div className="flex gap-2 border-t border-primary/25 px-5 py-4">
              <button
                type="button"
                className="neon-btn inline-flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold"
                onClick={reset}
              >
                <RotateCcw className="h-4 w-4" />
                Restaurar padrão
              </button>
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center rounded-md border border-primary/40 bg-primary/15 px-4 py-2.5 text-sm font-semibold text-primary"
                onClick={() => setOpen(false)}
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ToggleRow({
  label,
  description,
  pressed,
  onToggle,
}: {
  label: string;
  description: string;
  pressed: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="mt-3 flex items-center justify-between gap-4 rounded-lg border border-primary/20 bg-secondary px-3 py-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={pressed}
        aria-label={label}
        className={`a11y-switch shrink-0 ${pressed ? "is-on" : ""}`}
        onClick={onToggle}
      >
        <span className="a11y-switch-thumb" />
      </button>
    </div>
  );
}
