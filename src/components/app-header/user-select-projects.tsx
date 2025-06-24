"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectValue
} from "@/components/ui/select";
import { BoxIcon, ChevronsUpDownIcon, PlusIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";

export function UserSelectProjects() {
  function handleCreateNewProject() {}

  return (
    <Select>
      <SelectPrimitive.Trigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:bg-accent text-foreground h-8 p-1.5 focus-visible:ring-0"
        >
          <BoxIcon className="size-4 text-muted-foreground/80" />
          <SelectValue placeholder="Selecione seu projeto" />
          <ChevronsUpDownIcon className="size-3.5 text-muted-foreground/80" />
        </Button>
      </SelectPrimitive.Trigger>
      <SelectContent>
        <SelectItem value="sankofaai">Sankofa.AI</SelectItem>
        <SelectItem value="sorotec">Sorotec</SelectItem>
        <SelectItem value="blumen">Blumen</SelectItem>
        <SelectSeparator />
        <SelectItem value="new-project" onClick={handleCreateNewProject}>
          <PlusIcon />
          <span>Novo projeto</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
