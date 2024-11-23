import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
  return (
    <header>
      <Card className="flex items-center justify-between p-[1.8rem] border-0">
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
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
