"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = Array.from({ length: 30 }, (_, i) => ({
  day: String(i + 1).padStart(2, "0"),
  usage: Math.floor(Math.random() * 30) + 1,
}));

const chartConfig = {
  usage: {
    label: "Uso",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function BandwidthChart() {
  return (
    <ChartContainer config={chartConfig} className="w-full h-[180px]">
      <ResponsiveContainer width="100%">
        <BarChart accessibilityLayer data={chartData} barGap={2}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={1}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="usage" fill="var(--color-usage)" radius={2} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
