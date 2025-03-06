import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
];

export const NavBar = async () => {
  return (
    <nav className="flex bg-purple-900 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon />
        <span className="ml-2">Home</span>
      </Link>
      <div className="flex  flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.text} {...navItem}/>
      ))}
    </nav>
  );
};
