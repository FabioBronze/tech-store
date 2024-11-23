import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./sheet";

const Header: React.FC = () => {
  return (
    <header>
      <Card className="flex items-center justify-between border-0 p-[1.8rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Options</SheetDescription>
            </SheetHeader>
            <div className="mt-2 flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <HomeIcon /> Home
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <LogInIcon /> Login
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <PercentIcon /> Offers
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <ListOrderedIcon /> Catalog
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Tech</span> Store
        </h1>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    </header>
  );
};

export default Header;
