"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "ホーム", icon: HomeIcon },
  { href: "/tools/cat-age", label: "ねこ", icon: CatIcon },
  { href: "/tools/dog-age", label: "わんこ", icon: DogIcon },
  { href: "/tools/feeding-calculator", label: "ごはん", icon: CalcIcon },
  { href: "/tools", label: "一覧", icon: ListIcon },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 backdrop-blur sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="モバイルナビゲーション"
    >
      <div className="mx-auto flex max-w-5xl">
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] ${
                active ? "text-accent" : "text-muted"
              }`}
            >
              <Icon active={active} />
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.4 : 1.8}>
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9h14v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CatIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.4 : 1.8}>
      <path d="M5 4 8 9h8l3-5-3 3.5H8L5 4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9v7a6 6 0 0 0 12 0V9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="14" r="0.6" fill="currentColor" />
      <circle cx="14.5" cy="14" r="0.6" fill="currentColor" />
    </svg>
  );
}

function DogIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.4 : 1.8}>
      <path d="M5 8c-1.5 0-2.5 1.5-2 3l1.5 1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 8c1.5 0 2.5 1.5 2 3l-1.5 1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10a6 6 0 0 1 12 0v3a6 6 0 0 1-12 0v-3Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="12.5" r="0.6" fill="currentColor" />
      <circle cx="14.5" cy="12.5" r="0.6" fill="currentColor" />
      <path d="M11 15h2" strokeLinecap="round" />
    </svg>
  );
}

function CalcIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.4 : 1.8}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 8h8M8 12h2M12 12h2M16 12h0M8 16h2M12 16h2M16 16h0" strokeLinecap="round" />
    </svg>
  );
}

function ListIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.4 : 1.8}>
      <path d="M8 6h12M8 12h12M8 18h12" strokeLinecap="round" />
      <circle cx="4" cy="6" r="1" fill="currentColor" />
      <circle cx="4" cy="12" r="1" fill="currentColor" />
      <circle cx="4" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}
