import { DeviceCard } from "@/components/device-card";

export default function App() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Painel de Gestão de Projeto</h2>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Dispositivos</h3>

        <div className="flex items-center gap-4">
          <DeviceCard
            title="Quarto 23"
            identifier="esp32-rm-23"
            status="connected"
          />
          <DeviceCard
            title="Quarto 18"
            identifier="esp32-rm-18"
            status="disconnected"
          />
          <DeviceCard
            title="Quarto 13"
            identifier="esp32-rm-13"
            status="stand-by"
          />
        </div>
      </section>
    </div>
  );
}
