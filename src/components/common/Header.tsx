"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FormDialoug from "./FormDialoug";

const Header = () => {
  const links = [
    {
      id: 0,
      name: "Home",
      href: "/",
    },
    {
      id: 1,
      name: "MarketPlace",
      href: "/marketplace",
    },
    {
      id: 3,
      name: "Team",
      href: "/team",
    },
    {
      id: 4,
      name: "Support",
      href: "/support",
    },
  ];

  const pathname = usePathname();

  return (
    <header className="flex container mx-auto py-4 items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">
          <span className="text-primary">A</span>rshop
        </h1>
      </div>

      <nav className=" hidden lg:flex items-center text-sm space-x-8">
        {links.map((li) => (
          <Link href={li.href} key={li.id}>
            <p className={cn(pathname === li.href && "text-primary")}>
              {li.name}
            </p>
          </Link>
        ))}
      </nav>

      <div className="flex items-center space-x-8 text-sm">
        <button className="text-muted-foreground">Login</button>

        {/* <button className="bg-primary/10 px-4 shadow-md py-2 text-primary rounded-md ">
          Get Started
        </button> */}
        <FormDialoug />
      </div>
    </header>
  );
};

export default Header;
