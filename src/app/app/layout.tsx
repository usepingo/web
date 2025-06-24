import { AppHeader } from "@/components/app-header";
import { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <AppHeader />
      <main className="min-h-screen w-full py-6 px-8">{children}</main>
    </div>
  );
}
