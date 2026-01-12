"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Sobre" },
  { href: "/resume", label: "Currículo" },
  { href: "/skills", label: "Skills" },
  { href: "/portfolio", label: "Portfólio" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="absolute top-0 right-0 z-50 w-max rounded-bl-2xl bg-content2 border border-default p-5"
    >
      <ul className="flex items-center gap-6">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-semibold transition-colors ${
                  isActive
                    ? "text-primary-500"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
