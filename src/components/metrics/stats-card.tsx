import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
  className?: string;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  className,
}: StatsCardProps) {
  return (
    <div className={cn("border rounded-md p-5 bg-muted/20", className)}>
      <div className="w-full flex items-center justify-between mb-2">
        <span className="font-medium">{title}</span>
        <Icon className="size-5 text-muted-foreground" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-bold">{value}</p>
        <span className="text-sm text-muted-foreground">{description}</span>
      </div>
    </div>
  );
}
