"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationLinks = [
  { href: "/app", label: "Overview" },
  { href: "/app/metrics", label: "Métricas" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NavigationMenu className="h-full *:h-full max-md:hidden">
      <NavigationMenuList className="h-full gap-2">
        {navigationLinks.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <NavigationMenuItem key={index} className="h-full">
              <NavigationMenuLink className="rounded-none" active={isActive} asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "text-muted-foreground border-b-primary hover:border-b-primary data-[active]:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent!",
                    isActive ? "text-secondary-foreground" : ""
                  )}
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
