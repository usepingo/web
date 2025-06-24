import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  icon: LucideIcon;
  children?: ReactNode;
  className?: string;
}

export function ChartBaseCard({
  title,
  children,
  icon: Icon,
  className,
}: StatsCardProps) {
  return (
    <div className={cn("border rounded-md p-5 bg-muted/20", className)}>
      <div className="w-full flex items-center justify-between mb-2">
        <span className="font-medium">{title}</span>
        <Icon className="size-5 text-muted-foreground" />
      </div>
      <div>{children}</div>
    </div>
  );
}
