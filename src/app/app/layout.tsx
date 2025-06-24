import { AppHeader } from "@/components/app-header";
import { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative w-full md:min-h-screen">
      <AppHeader />
      <main className="md:pt-30 h-full w-full pt-6 pb-6 px-8">{children}</main>
    </div>
  );
}
