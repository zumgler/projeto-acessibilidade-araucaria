import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TooltipProps } from "recharts";
import { useMediaQuery } from "@/hooks/use-media-query";

type ChartRow = { label: string; value: number };

const DONUT_COLORS = ["#0891b2", "#5a8fa3"] as const;
const CHART_AXIS = "#1a3a4d";
const CHART_GRID = "rgba(12, 34, 48, 0.2)";

function BarTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;

  const item = payload[0];
  const label = String(item.payload?.label ?? (item.name !== "value" ? item.name : "") ?? "—");
  const count = Number(item.value ?? 0);

  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-label">{label}</p>
      <p className="chart-tooltip-meta">{count} respostas</p>
    </div>
  );
}

function DonutLegend({
  data,
  colors = [...DONUT_COLORS],
}: {
  data: ChartRow[];
  colors?: string[];
}) {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {data.map((item, index) => {
        const percent = total > 0 ? Math.round((item.value / total) * 100) : 0;
        const color = colors[index % colors.length];

        return (
          <div
            key={item.label}
            className="flex items-center justify-between gap-3 rounded-lg border border-primary/25 bg-secondary/80 px-4 py-3"
          >
            <span className="flex items-center gap-2.5">
              <span
                className="h-3 w-3 shrink-0 rounded-full ring-1 ring-primary/40"
                style={{ background: color }}
              />
              <span className="text-base font-semibold text-foreground">{item.label}</span>
            </span>
            <span className="text-2xl font-bold text-primary">{percent}%</span>
          </div>
        );
      })}
    </div>
  );
}

export function BarsChart({
  data,
  dataKey = "value",
  labelKey = "label",
  color = "url(#barGrad)",
  height,
  highlight,
}: {
  data: ChartRow[];
  dataKey?: string;
  labelKey?: string;
  color?: string;
  height?: number;
  highlight?: string[];
}) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const chartHeight = height ?? (isMobile ? 220 : 280);
  const tickSize = isMobile ? 10 : 12;

  return (
    <div className="chart-surface w-full min-w-0">
      <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: isMobile ? -18 : -12, bottom: 0 }}>
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5a8fa3" stopOpacity={0.95} />
              <stop offset="100%" stopColor="#0e7490" stopOpacity={0.9} />
            </linearGradient>
            <linearGradient id="barGradAlert" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0891b2" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#155e75" stopOpacity={0.85} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={CHART_GRID} vertical={false} />
          <XAxis
            dataKey={labelKey}
            tick={{ fill: CHART_AXIS, fontSize: tickSize }}
            tickLine={false}
            axisLine={false}
            interval={isMobile ? "preserveStartEnd" : 0}
            angle={isMobile && data.length > 4 ? -25 : 0}
            textAnchor={isMobile && data.length > 4 ? "end" : "middle"}
            height={isMobile && data.length > 4 ? 50 : 30}
          />
          <YAxis
            tick={{ fill: CHART_AXIS, fontSize: tickSize }}
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
            width={isMobile ? 28 : 36}
          />
          <Tooltip
            cursor={{ fill: "rgba(8, 145, 178, 0.1)" }}
            content={<BarTooltip />}
            wrapperClassName="chart-tooltip-wrapper"
            labelFormatter={() => ""}
            formatter={() => null}
          />
          <Bar dataKey={dataKey} radius={[6, 6, 0, 0]} fill={color} name="respostas">
            {data.map((d) => (
              <Cell
                key={d.label}
                fill={highlight?.includes(d.label) ? "url(#barGradAlert)" : "url(#barGrad)"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DonutChart({
  data,
  height,
  colors = [...DONUT_COLORS],
}: {
  data: ChartRow[];
  height?: number;
  colors?: string[];
}) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const chartHeight = height ?? (isMobile ? 200 : isTablet ? 220 : 240);

  return (
    <div className="chart-donut w-full min-w-0">
      <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px]">
        <ResponsiveContainer width="100%" height={chartHeight}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="label"
              innerRadius="60%"
              outerRadius="85%"
              paddingAngle={3}
              stroke="#0891b2"
              strokeWidth={2}
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell key={entry.label} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <DonutLegend data={data} colors={colors} />
    </div>
  );
}
