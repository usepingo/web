import { cn } from "@/lib/utils";
import { HardDriveIcon } from "lucide-react";

interface DeviceCardProps {
    title: string
    identifier: string
    status: 'connected' | 'stand-by' | 'disconnected'
}

export function DeviceCard({ title, identifier, status }: DeviceCardProps) {
  return (
    <div className="relative w-52 flex items-center gap-3 border rounded-md p-5 bg-muted-foreground/5 hover:bg-muted-foreground/15 transition-colors cursor-pointer">
      <div
        title="online"
        className={cn("absolute -top-1 -right-1 size-2.5 rounded-full",
            status === 'connected' && "bg-green-500 animate-pulse",
            status === "stand-by" && "bg-amber-500",
            status === "disconnected" && "bg-destructive"
        )}
      />

      <HardDriveIcon className="size-5 text-muted-foreground" />

      <div className="flex flex-col">
        <span className="text-lg font-semibold">{title}</span>
        <span className="text-xs text-muted-foreground">{identifier}</span>
      </div>
    </div>
  );
}
