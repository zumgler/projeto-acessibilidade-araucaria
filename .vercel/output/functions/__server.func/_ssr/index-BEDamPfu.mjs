import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { R as Route } from "./router-CjEqjJIw.mjs";
import "../_libs/seroval.mjs";
import { b as ArrowRight, R as RefreshCw, U as Users, C as ChartColumn, a as Activity, T as TrendingUp, X, M as Menu, A as Accessibility, h as Type, d as Minus, P as Plus, c as Contrast, f as Sparkles, e as RotateCcw, i as UsersRound, g as SquareUserRound, S as School, G as GraduationCap } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, a as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, B as Bar, b as Cell, c as PieChart, P as Pie } from "../_libs/recharts.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-CD4j9COQ.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/clsx.mjs";
import "../_libs/lodash.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const DEFAULT_ACCESSIBILITY = {
  fontScale: 100,
  highContrast: false,
  reduceMotion: false,
  customCursor: true
};
const STORAGE_KEY = "nexo-acessibilidade";
function loadAccessibilitySettings() {
  if (typeof window === "undefined") return DEFAULT_ACCESSIBILITY;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ACCESSIBILITY;
    const parsed = JSON.parse(raw);
    return {
      fontScale: clamp(parsed.fontScale ?? DEFAULT_ACCESSIBILITY.fontScale, 80, 140),
      highContrast: parsed.highContrast ?? DEFAULT_ACCESSIBILITY.highContrast,
      reduceMotion: parsed.reduceMotion ?? DEFAULT_ACCESSIBILITY.reduceMotion,
      customCursor: parsed.customCursor ?? DEFAULT_ACCESSIBILITY.customCursor
    };
  } catch {
    return DEFAULT_ACCESSIBILITY;
  }
}
function saveAccessibilitySettings(settings) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}
function applyAccessibilitySettings(settings) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.fontSize = `${settings.fontScale}%`;
  root.classList.toggle("high-contrast", settings.highContrast);
  root.classList.toggle("reduce-motion", settings.reduceMotion);
  root.classList.toggle("no-custom-cursor", !settings.customCursor);
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function AccessibilityMenu() {
  const [open, setOpen] = reactExports.useState(false);
  const [settings, setSettings] = reactExports.useState(DEFAULT_ACCESSIBILITY);
  reactExports.useEffect(() => {
    const saved = loadAccessibilitySettings();
    setSettings(saved);
    applyAccessibilitySettings(saved);
  }, []);
  reactExports.useEffect(() => {
    applyAccessibilitySettings(settings);
    saveAccessibilitySettings(settings);
  }, [settings]);
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  const update = (patch) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  };
  const reset = () => setSettings(DEFAULT_ACCESSIBILITY);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "a11y-fab neon-btn fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold shadow-lg sm:bottom-6 sm:right-6",
        "aria-expanded": open,
        "aria-controls": "a11y-panel",
        "aria-label": "Abrir configurações de acessibilidade",
        onClick: () => setOpen(true),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Accessibility, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Acessibilidade" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "a11y-overlay fixed inset-0 z-[70] flex items-end justify-center bg-slate-900/50 p-0 backdrop-blur-sm sm:items-center sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        id: "a11y-panel",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "a11y-title",
        className: "a11y-panel hud-panel flex max-h-[92dvh] w-full max-w-lg flex-col rounded-t-2xl sm:rounded-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-primary/25 px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.25em] text-primary/80", children: "preferências" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "a11y-title", className: "text-lg font-bold", children: "Acessibilidade do site" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "neon-btn inline-flex h-9 w-9 items-center justify-center rounded-md",
                "aria-label": "Fechar painel de acessibilidade",
                onClick: () => setOpen(false),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 overflow-y-auto px-5 py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "a11y-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "a11y-section-title", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className: "h-4 w-4 text-primary" }),
                "Tamanho do texto"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
                "Ajuste o tamanho de toda a leitura do site (",
                settings.fontScale,
                "%)."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "neon-btn inline-flex h-10 w-10 items-center justify-center rounded-md",
                    "aria-label": "Diminuir texto",
                    onClick: () => update({ fontScale: Math.max(80, settings.fontScale - 10) }),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "range",
                    min: 80,
                    max: 140,
                    step: 5,
                    value: settings.fontScale,
                    "aria-label": "Tamanho da fonte",
                    className: "a11y-range flex-1",
                    onChange: (event) => update({ fontScale: Number(event.target.value) })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "neon-btn inline-flex h-10 w-10 items-center justify-center rounded-md",
                    "aria-label": "Aumentar texto",
                    onClick: () => update({ fontScale: Math.min(140, settings.fontScale + 10) }),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "a11y-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "a11y-section-title", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Contrast, { className: "h-4 w-4 text-primary" }),
                "Visual"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ToggleRow,
                {
                  label: "Alto contraste",
                  description: "Mais contraste entre texto e fundo.",
                  pressed: settings.highContrast,
                  onToggle: () => update({ highContrast: !settings.highContrast })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "a11y-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "a11y-section-title", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
                "Movimento"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ToggleRow,
                {
                  label: "Reduzir animações",
                  description: "Desativa animações, scanlines e efeitos em movimento.",
                  pressed: settings.reduceMotion,
                  onToggle: () => update({ reduceMotion: !settings.reduceMotion })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-lg border border-primary/20 bg-secondary px-3 py-2 text-xs text-muted-foreground", children: "Suas preferências são salvas neste dispositivo e aplicadas automaticamente na próxima visita." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 border-t border-primary/25 px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "neon-btn inline-flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold",
                onClick: reset,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
                  "Restaurar padrão"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "inline-flex flex-1 items-center justify-center rounded-md border border-primary/40 bg-primary/15 px-4 py-2.5 text-sm font-semibold text-primary",
                onClick: () => setOpen(false),
                children: "Concluir"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
function ToggleRow({
  label,
  description,
  pressed,
  onToggle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between gap-4 rounded-lg border border-primary/20 bg-secondary px-3 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-checked": pressed,
        "aria-label": label,
        className: `a11y-switch shrink-0 ${pressed ? "is-on" : ""}`,
        onClick: onToggle,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "a11y-switch-thumb" })
      }
    )
  ] });
}
function useMediaQuery(query) {
  const [matches, setMatches] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}
const DONUT_COLORS = ["#0891b2", "#5a8fa3"];
const CHART_AXIS = "#1a3a4d";
const CHART_GRID = "rgba(12, 34, 48, 0.2)";
function BarTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  const label = String(item.payload?.label ?? (item.name !== "value" ? item.name : "") ?? "—");
  const count = Number(item.value ?? 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chart-tooltip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "chart-tooltip-label", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "chart-tooltip-meta", children: [
      count,
      " respostas"
    ] })
  ] });
}
function DonutLegend({
  data,
  colors = [...DONUT_COLORS]
}) {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: data.map((item, index) => {
    const percent = total > 0 ? Math.round(item.value / total * 100) : 0;
    const color = colors[index % colors.length];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between gap-3 rounded-lg border border-primary/25 bg-secondary/80 px-4 py-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "h-3 w-3 shrink-0 rounded-full ring-1 ring-primary/40",
                style: { background: color }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold text-foreground", children: item.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-primary", children: [
            percent,
            "%"
          ] })
        ]
      },
      item.label
    );
  }) });
}
function BarsChart({
  data,
  dataKey = "value",
  labelKey = "label",
  color = "url(#barGrad)",
  height,
  highlight
}) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const chartHeight = height ?? (isMobile ? 220 : 280);
  const tickSize = isMobile ? 10 : 12;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-surface w-full min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: chartHeight, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data, margin: { top: 8, right: 8, left: isMobile ? -18 : -12, bottom: 0 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "barGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#5a8fa3", stopOpacity: 0.95 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#0e7490", stopOpacity: 0.9 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "barGradAlert", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#0891b2", stopOpacity: 0.9 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#155e75", stopOpacity: 0.85 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: CHART_GRID, vertical: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      XAxis,
      {
        dataKey: labelKey,
        tick: { fill: CHART_AXIS, fontSize: tickSize },
        tickLine: false,
        axisLine: false,
        interval: isMobile ? "preserveStartEnd" : 0,
        angle: isMobile && data.length > 4 ? -25 : 0,
        textAnchor: isMobile && data.length > 4 ? "end" : "middle",
        height: isMobile && data.length > 4 ? 50 : 30
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      YAxis,
      {
        tick: { fill: CHART_AXIS, fontSize: tickSize },
        tickLine: false,
        axisLine: false,
        allowDecimals: false,
        width: isMobile ? 28 : 36
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tooltip,
      {
        cursor: { fill: "rgba(8, 145, 178, 0.1)" },
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(BarTooltip, {}),
        wrapperClassName: "chart-tooltip-wrapper",
        labelFormatter: () => "",
        formatter: () => null
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey, radius: [6, 6, 0, 0], fill: color, name: "respostas", children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Cell,
      {
        fill: highlight?.includes(d.label) ? "url(#barGradAlert)" : "url(#barGrad)"
      },
      d.label
    )) })
  ] }) }) });
}
function DonutChart({
  data,
  height,
  colors = [...DONUT_COLORS]
}) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const chartHeight = height ?? (isMobile ? 200 : isTablet ? 220 : 240);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chart-donut w-full min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-[280px] sm:max-w-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: chartHeight, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PieChart, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pie,
      {
        data,
        dataKey: "value",
        nameKey: "label",
        innerRadius: "60%",
        outerRadius: "85%",
        paddingAngle: 3,
        stroke: "#0891b2",
        strokeWidth: 2,
        isAnimationActive: false,
        children: data.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: colors[index % colors.length] }, entry.label))
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DonutLegend, { data, colors })
  ] });
}
function Credits() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "credits", className: "section-anchor relative px-4 pb-20 pt-12 sm:px-6 sm:pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hud-panel relative overflow-hidden rounded-3xl p-8 sm:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 tech-grid opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-primary/80", children: "/ créditos · 04" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-bold tracking-tight sm:text-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Quem construiu este projeto." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-[11px] leading-snug text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "</>" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-words", children: "desenvolvido por Carlos Eduardo Schafranski Ferreira" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { index: "01", icon: UsersRound, label: "Turma", value: "2º D — Ensino Médio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CreditCard,
            {
              index: "02",
              icon: SquareUserRound,
              label: "Orientação",
              value: "Prof. Daniel Felipe Meurer"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CreditCard,
            {
              index: "03",
              icon: School,
              label: "Instituição",
              value: "Colégio Estadual Fazenda Velha"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CreditCard,
            {
              index: "04",
              icon: GraduationCap,
              label: "Programa",
              value: "Projeto Integrador · SEED - Secretaria da Educação do Paraná"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " — ❤ Feito à mão por Carlos Eduardo Schafranski Ferreira ❤"
    ] })
  ] }) });
}
function CreditCard({
  index,
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_8px_24px_rgba(12,34,48,0.18)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-primary/70", children: [
        "/ ",
        index
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold leading-snug text-foreground sm:text-base", children: value })
  ] });
}
const TRAIL_SIZE = 7;
function CustomCursor() {
  const [enabled, setEnabled] = reactExports.useState(false);
  const [pointer, setPointer] = reactExports.useState({ x: 0, y: 0 });
  const [trail, setTrail] = reactExports.useState(
    Array.from({ length: TRAIL_SIZE }, () => ({ x: 0, y: 0 }))
  );
  const [hovering, setHovering] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const syncEnabled = () => {
      const desktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const cursorAllowed = !document.documentElement.classList.contains("no-custom-cursor");
      setEnabled(desktop && cursorAllowed);
    };
    syncEnabled();
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    media.addEventListener("change", syncEnabled);
    const observer = new MutationObserver(syncEnabled);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      media.removeEventListener("change", syncEnabled);
      observer.disconnect();
    };
  }, []);
  reactExports.useEffect(() => {
    if (!enabled) return;
    const onMove = (event) => {
      const next = { x: event.clientX, y: event.clientY };
      setPointer(next);
      setTrail((prev) => [next, ...prev.slice(0, TRAIL_SIZE - 1)]);
      const target = event.target;
      setHovering(!!target?.closest("a, button, [role='button'], input, textarea, select, label"));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `custom-cursor ${hovering ? "is-hovering" : ""}`,
        style: { left: pointer.x, top: pointer.y }
      }
    ),
    trail.map((dot, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "custom-cursor-trail",
        style: {
          left: dot.x,
          top: dot.y,
          opacity: (TRAIL_SIZE - index) / (TRAIL_SIZE * 1.35),
          transform: `translate(-50%, -50%) scale(${1 - index * 0.08})`
        }
      },
      `${index}-${dot.x}-${dot.y}`
    ))
  ] });
}
const GOOGLE_FORM_PUBLIC_URL = "https://forms.gle/grHf46u2hcgJYCRHA";
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdW9uwlSuTmEZWP0TEVpQ1uOVC4yHVJ7lg0Rxj3YE26ZqjeGw/viewform?embedded=true";
function GoogleFormEmbed() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "formulario", className: "section-anchor px-4 py-12 sm:px-6 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hud-panel rounded-3xl p-6 sm:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.26em] text-primary/80", children: "sua voz conta · questionário aberto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-bold sm:text-4xl", children: "Responder pesquisa de acessibilidade" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground sm:text-base", children: "As respostas são enviadas ao Google Forms e sincronizadas com a planilha vinculada. O painel do site lê essa planilha para atualizar os gráficos." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-hidden rounded-2xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        title: "Questionário sobre acessibilidade em Araucária",
        src: GOOGLE_FORM_EMBED_URL,
        width: "100%",
        height: "1685",
        className: "min-h-[520px] w-full border-0 sm:min-h-[640px] lg:min-h-[720px]",
        loading: "lazy",
        children: "Carregando…"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: GOOGLE_FORM_PUBLIC_URL,
        target: "_blank",
        rel: "noreferrer",
        className: "neon-btn inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold",
        children: "abrir formulário em nova aba"
      }
    ) })
  ] }) }) });
}
const NAV_ITEMS = [
  { n: "01", label: "Contexto", id: "contexto" },
  { n: "02", label: "Formulário", id: "formulario" },
  { n: "03", label: "Painel", id: "painel" },
  { n: "04", label: "Equipe", id: "credits" }
];
function SiteNav() {
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  const closeMenu = () => setOpen(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "site-header fixed inset-x-0 top-0 z-50 border-b border-border/50 shadow-sm backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        className: "site-nav mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6",
        "aria-label": "Navegação principal",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#top",
              className: "flex min-w-0 shrink-0 items-center gap-2 text-xs tracking-[0.18em] uppercase sm:tracking-[0.2em]",
              onClick: closeMenu,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary/50 bg-primary/10 text-[11px] font-bold text-primary", children: "NX" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate text-foreground/80", children: [
                  "Nexo",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Urbano" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-0.5 md:flex", children: NAV_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `#${item.id}`, className: "site-nav-link group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/60 group-hover:text-primary", children: item.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
          ] }) }, item.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "neon-btn inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md md:hidden",
              "aria-expanded": open,
              "aria-controls": "mobile-nav",
              "aria-label": open ? "Fechar menu" : "Abrir menu",
              onClick: () => setOpen((value) => !value),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "mobile-nav", className: "border-t border-border/40 bg-background/95 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6", children: NAV_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: `#${item.id}`,
        className: "flex items-center gap-3 rounded-md border border-transparent px-3 py-3 text-sm uppercase tracking-[0.15em] transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary",
        onClick: closeMenu,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary/70", children: item.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: item.label })
        ]
      }
    ) }, item.id)) }) })
  ] });
}
function TechBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 tech-grid opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-28 left-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 bottom-8 h-80 w-80 rounded-full bg-primary/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-8 top-16 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" }),
    Array.from({ length: 18 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute block h-1 w-1 rounded-full bg-primary/30 animate-float",
        style: {
          top: `${i * 47 % 100}%`,
          left: `${i * 29 % 100}%`,
          animationDelay: `${i % 6 * 0.7}s`,
          animationDuration: `${5 + i % 5}s`
        }
      },
      i
    ))
  ] });
}
function pct(value, total) {
  if (total === 0) return "0.0";
  return (value / total * 100).toFixed(1);
}
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
    fetchError
  } = stats;
  const q2Total = q2.reduce((acc, item) => acc + item.value, 0);
  const q5Total = q5.reduce((acc, item) => acc + item.value, 0);
  const negativeSidewalks = q2.filter((item) => ["Regular", "Ruim", "Péssima"].includes(item.label)).reduce((acc, item) => acc + item.value, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "top", className: "relative min-h-dvh w-full max-w-[100vw] overflow-x-hidden scanlines", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AccessibilityMenu, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-anchor relative isolate min-h-[85dvh] px-4 pb-12 pt-24 sm:min-h-dvh sm:px-6 sm:pb-16 sm:pt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TechBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1.1fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "hud-panel rounded-3xl p-6 sm:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-primary/80", children: "acessibilidade urbana · Araucária 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-balance text-3xl font-black leading-[0.95] sm:text-5xl lg:text-6xl", children: [
            "Araucária",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neon-title", children: " · PcD" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 block text-foreground/90", children: "inclusão nas ruas, dados na prática" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg", children: "Pesquisa e painel interativo para mostrar como pessoas com mobilidade reduzida vivenciam calçadas, travessias e rotas no dia a dia." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#painel", className: "neon-btn inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold sm:w-auto", children: [
              "abrir painel",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 shrink-0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#formulario", className: "inline-flex w-full items-center justify-center rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary sm:w-auto", children: "responder pesquisa" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hud-panel tech-line relative rounded-3xl px-6 py-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.26em] text-primary/75", children: "feed operacional" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LiveData, { label: "respostas registradas", value: String(totalResponses) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(LiveData, { label: "nota média de acessibilidade", value: `${q1Avg}/10` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(LiveData, { label: "relatam barreiras nas calçadas", value: `${q3SimPct}%` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(LiveData, { label: "pedem mais investimento", value: `${q5SupportPct}%` })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contexto", className: "section-anchor px-4 py-12 sm:px-6 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hud-panel rounded-3xl p-6 sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { text: "origem do estudo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-bold sm:text-4xl", children: "Da sala de aula para o território" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Em meio a uma feira de ciências sobre mobilidade reduzida, o aluno Carlos Eduardo Schafranski Ferreira junto com a orientação do professor Daniel Felipe Meurer, realizaram uma pesquisa sobre a acessibilidade urbana em Araucária." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCard, { title: "Coleta", desc: "Questionário no Google Forms aplicado a estudantes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCard, { title: "Leitura", desc: "Interpretação visual para apoiar decisão pública." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCard, { title: "Foco", desc: "Acessibilidade de PcD em trajeto urbano real." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContextCard, { title: "Entrega", desc: "Painel técnico com evidências." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GoogleFormEmbed, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "painel", className: "section-anchor px-4 py-12 sm:px-6 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { text: "painel de dados" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-balance text-2xl font-bold sm:text-4xl lg:text-5xl", children: "Dashboard de acessibilidade urbana" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "neon-btn inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold sm:w-auto", onClick: () => router.invalidate(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4" }),
          "atualizar dados"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataSourceBadge, { className: "mt-4", source, updatedAt, fetchError }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: Users, label: "Respondentes", value: String(totalResponses) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: ChartColumn, label: "Média geral", value: `${q1Avg}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: Activity, label: "Barreiras na rota", value: `${q3SimPct}%` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: TrendingUp, label: "Apoio ao investimento", value: `${q5SupportPct}%` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Avaliação geral das vias", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BarsChart, { data: q1 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Qualidade das calçadas", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BarsChart, { data: q2, highlight: ["Regular", "Ruim", "Péssima"] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Obstáculos no deslocamento", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DonutChart, { data: q3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs leading-relaxed text-muted-foreground", children: [
            q3SimPct,
            "% dos respondentes percebem obstáculos frequentes nas calçadas."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Semáforos acessíveis para PcD", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DonutChart, { data: q4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs leading-relaxed text-muted-foreground", children: [
            q4SimPct,
            "% consideram o tempo dos semáforos adequado para travessia segura."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Investimento público em acessibilidade", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BarsChart, { data: q5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4", children: q5.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-primary/20 bg-secondary px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-lg font-bold text-primary", children: [
            item.value,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-xs text-muted-foreground", children: [
              "· ",
              pct(item.value, q5Total),
              "%"
            ] })
          ] })
        ] }, item.label)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "leituras", className: "section-anchor px-4 py-12 sm:px-6 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { text: "leituras técnicas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Insight, { title: "Barreira estrutural", desc: `${q3SimPct}% identificam interrupções em rotas de caminhada.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Insight, { title: "Calçadas críticas", desc: `${pct(negativeSidewalks, q2Total)}% classificaram as calçadas em nível negativo.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Insight, { title: "Demanda clara", desc: `${q5SupportPct}% defendem mais investimento público em acessibilidade.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Insight, { title: "Percepção geral", desc: `Nota média de ${q1Avg}/10 indica cenário ainda abaixo do ideal.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Insight, { title: "Semáforos", desc: `${q4SimPct}% consideram os tempos de travessia acessíveis para PcD.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Insight, { title: "Próximo passo", desc: "As evidências apontam para ações urbanas de curto prazo." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-anchor px-4 pb-20 pt-12 sm:px-6 sm:pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hud-panel rounded-3xl p-7 sm:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { text: "síntese final" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-bold sm:text-4xl", children: "Acessibilidade não é detalhe, é infraestrutura básica..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-4xl text-muted-foreground", children: "Os dados da pesquisa mostram que a cidade tem forte potencial, mas ainda com diversas lacunas concretas para pessoas com mobilidade reduzida. O cenário exige investimento contínuo, revisão de travessias e padrão técnico de calçadas em toda a malha urbana." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid gap-3 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalData, { label: "Média geral", value: `${q1Avg}/10` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalData, { label: "Obstáculos relatados", value: `${q3SimPct}%` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalData, { label: "Apoio a melhorias", value: `${q5SupportPct}%` })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Credits, {})
  ] });
}
function DataSourceBadge({
  source,
  updatedAt,
  fetchError,
  className = ""
}) {
  const label = source === "live" ? `dados ao vivo${updatedAt ? ` · ${new Date(updatedAt).toLocaleString("pt-BR")}` : ""}` : "dados de referência (planilha não conectada)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border border-primary/25 bg-secondary px-3 py-2.5 text-xs ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: label }),
    fetchError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] leading-relaxed text-muted-foreground", children: fetchError })
  ] });
}
function SectionTag({
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-sm border border-primary/35 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary", children: text });
}
function LiveData({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-secondary/70 px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-bold text-primary", children: value })
  ] });
}
function ContextCard({
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "hud-panel rounded-2xl p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: desc })
  ] });
}
function Kpi({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "hud-panel rounded-2xl p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-black text-primary sm:text-4xl", children: value })
  ] });
}
function Panel({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "hud-panel min-w-0 overflow-hidden rounded-3xl p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs uppercase tracking-[0.2em] text-primary/80 sm:text-sm sm:tracking-[0.23em]", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children })
  ] });
}
function Insight({
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "hud-panel rounded-2xl p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: desc })
  ] });
}
function TerminalData({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-secondary/70 px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-bold text-primary", children: value })
  ] });
}
export {
  Index as component
};
