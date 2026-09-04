"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_NAME } from "@/lib/siteConfig";

const links = [
  { href: "/tools/cat-age", label: "猫の年齢" },
  { href: "/tools/dog-age", label: "犬の年齢" },
  { href: "/tools/feeding-calculator", label: "給餌量" },
  { href: "/tools", label: "ツール一覧" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:py-4">
        <Link href="/" className="font-serif-jp text-lg font-semibold tracking-wide sm:text-xl">
          {SITE_NAME}
        </Link>
        <nav className="hidden gap-2 text-sm sm:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full border px-4 py-1.5 font-medium transition ${
                  active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-foreground/80 hover:border-accent/40 hover:bg-accent-soft"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
