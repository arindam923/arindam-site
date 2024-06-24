"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

export default function DesktopLinks({}: Props) {
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
    <nav className=" hidden lg:flex items-center text-sm space-x-8">
      {links.map((li) => (
        <Link href={li.href} key={li.id}>
          <p className={cn(pathname === li.href && "text-primary")}>
            {li.name}
          </p>
        </Link>
      ))}
    </nav>
  );
}
