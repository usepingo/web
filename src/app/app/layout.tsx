import { AppHeader } from "@/components/app-header";
import { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative w-full min-h-screen">
      <AppHeader />
      <main className="pt-30 h-full w-full pb-6 px-8">{children}</main>
    </div>
  );
}
