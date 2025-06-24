import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCardIcon, LogOutIcon, User2Icon } from "lucide-react";

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/thethoomm.png" alt="thethoomm" />
          <AvatarFallback>TH</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span className="font-semibold truncate">Thomas Henrique</span>
          <span className="text-xs text-muted-foreground truncate">
            thomas.henrique@pingo.com.br
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User2Icon />
          <span>Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          <span>Faturamento</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
