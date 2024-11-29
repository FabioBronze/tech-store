"use client";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { Button } from "./button";
import { Card } from "./card";
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header: React.FC = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

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
            {status === "authenticated" && data?.user && (
              <div className="my-2 flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && (
                    <AvatarImage src={data.user.image}></AvatarImage>
                  )}
                </Avatar>
                <p className="font-medium">{data.user.name}</p>
              </div>
            )}
            <div className="mt-2 flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <HomeIcon /> Home
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <PercentIcon /> Offers
              </Button>
              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ListOrderedIcon /> Catalog
                  </Button>
                </Link>
              </SheetClose>
              {status === "unauthenticated" && (
                <Button
                  onClick={handleLoginClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon /> Login
                </Button>
              )}
              {status === "authenticated" && (
                <Button
                  onClick={handleLogoutClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogOutIcon /> Logout
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/">
          <h1 className="text-lg font-semibold">
            <span className="text-primary">Tech</span> Store
          </h1>
        </Link>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    </header>
  );
};

export default Header;
