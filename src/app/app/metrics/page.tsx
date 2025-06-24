import { BandwidthChart } from "@/components/metrics/bandwidth-chart";
import { ChartBaseCard } from "@/components/metrics/chart-base-card";
import { StatsCard } from "@/components/metrics/stats-card";
import { Separator } from "@/components/ui/separator";
import { ContainerIcon, GlobeIcon, SendIcon, WifiIcon } from "lucide-react";

export default function Metrics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Métricas</h2>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Dispositivos</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <StatsCard
            title="Dispositivos Conectados"
            value="02"
            icon={ContainerIcon}
            description="+2 conectados no último mês"
          />
          <StatsCard
            title="Mensagens recebidas"
            value="2.021"
            icon={SendIcon}
            description="200 recebidas no último dia"
          />
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Rede</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard
            className="col-span-1"
            title="Uso de Banda-larga"
            value="12.4 MB"
            icon={WifiIcon}
            description="de 50 MB disponíveis"
          />
          <StatsCard
            className="col-span-1"
            title="Latência Média"
            value="278ms"
            icon={WifiIcon}
            description="Jul 12 - Jul 23"
          />
          <ChartBaseCard
            className="col-span-1 md:col-span-2"
            title="Banda-larga (diariamente)"
            icon={GlobeIcon}
          >
            <BandwidthChart />
          </ChartBaseCard>
        </div>
      </section>
    </div>
  );
}
