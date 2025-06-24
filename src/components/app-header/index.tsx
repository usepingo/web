import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { UserMenu } from "./user-menu";
import { UserSelectProjects } from "./user-select-projects";
import Link from "next/link";

import { MobileMenu } from "./mobile-menu";
import { Navigation } from "./navigation";

const additionalLinks = [
  {
    label: "Ajuda",
    href: "/help",
  },
  {
    label: "Documentação",
    href: "/docs",
  },
];

const navigationLinks = [
  {
    label: "Dashboard",
    href: "/app",
  },
  {
    label: "Métricas",
    href: "/app/metrics",
  },
];

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 w-full md:h-24 border-b bg-background flex flex-col">
      <nav className="h-full w-full px-8 py-3 flex items-center justify-between">
        {/* Left Side */}
        <div className="h-8 flex items-center gap-2 md:gap-3">
          <Image
            src="/logo.svg"
            className="hidden md:block w-6"
            width={256}
            height={232}
            alt="Pingo logo"
            draggable={false}
          />
          <MobileMenu links={[...navigationLinks, ...additionalLinks]} />

          <Separator orientation="vertical" />

          <UserSelectProjects />
        </div>

        {/* Right Side */}
        <div className="h-8 flex items-center gap-2 md:gap-6">
          <ul className="hidden md:flex items-center gap-4">
            {additionalLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="transition-colors text-sm hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Separator orientation="vertical" />

          <ThemeToggle />
          <UserMenu />
        </div>
      </nav>

      <div className="h-full flex items-center gap-6 px-8">
        <Navigation links={navigationLinks} />
      </div>
    </header>
  );
}
