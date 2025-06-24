import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";

interface MobileMenuProps {
  links: { label: string; href: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="group size-8 md:hidden" variant="ghost" size="icon">
          <MenuIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-36 p-1 md:hidden">
        <NavigationMenu className="max-w-none *:w-full">
          <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
            {links.map((link, index) => (
              <NavigationMenuItem key={index} className="w-full">
                <NavigationMenuLink href={link.href} className="py-1.5">
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </PopoverContent>
    </Popover>
  );
}
