import Link from "next/link";
import { JSX } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../../../components/ui/button";
import { Menu } from "lucide-react";

// Solução temporária para compatibilidade entre React 19 e Next.js 15
const SafeLink = Link as any;

export function Header(): JSX.Element {
  return (
    <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
      
      <div className="container mx-auto flex items-center justify-between">
        <SafeLink href="/" className="text-3xl font-bold text-zinc-900">
          Consult<span className="text-emerald-500">Pro</span>
        </SafeLink>

        <nav className="hidden md:flex items-center">
          <a href="#">Profissionais</a>
        </nav>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Button className="text-black hover:bg-transparent" variant="ghost" size="icon" font-size="xs">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999]">
            <SheetTitle>Menu</SheetTitle>
            
            <SheetHeader></SheetHeader>

            <SheetDescription>
              Acesse nossos links
            </SheetDescription>

            <nav>
              <a href="#">Profissionais</a>
            </nav>

          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
