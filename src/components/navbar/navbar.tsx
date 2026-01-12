"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Sobre" },
  { href: "/resume", label: "Currículo" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contact", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="bg-content2 border border-default absolute top-0 right-0 w-max rounded-bl-2xl p-5 shadow-none"
    >
      <ul className="flex items-center gap-6">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                  transition-colors font-semibold
                  ${
                    isActive
                      ? "text-primary-500"
                      : "text-foreground/70 hover:text-foreground"
                  }
                `}
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
