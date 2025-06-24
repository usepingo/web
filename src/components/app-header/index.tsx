import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { UserMenu } from "./user-menu";
import { UserSelectProjects } from "./user-select-projects";
import Link from "next/link";
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

export function AppHeader() {
  return (
    <header className="w-full h-24 border-b bg-background flex flex-col">
      <nav className="h-full w-full px-8 py-3 flex items-center justify-between">
        {/* Left Side */}
        <div className="h-8 flex items-center gap-3">
          <Image
            src="/logo.svg"
            className="w-6"
            width={256}
            height={232}
            alt="Pingo logo"
            draggable={false}
          />
          <Separator orientation="vertical" />

          <UserSelectProjects />
        </div>

        {/* Right Side */}
        <div className="h-8 flex items-center gap-6">
          <ul className="flex items-center gap-4">
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
        <Navigation />
      </div>
    </header>
  );
}
