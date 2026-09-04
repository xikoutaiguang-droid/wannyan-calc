import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "計算ツール一覧",
  description: "猫・犬の年齢換算、1日の給餌量計算など、ペットを飼っている人に役立つ無料ツール集。",
  alternates: { canonical: "/tools" },
};

const tools = [
  {
    href: "/tools/cat-age",
    title: "猫の年齢計算",
    desc: "猫の年齢を人間年齢に換算",
    icon: <CatIcon />,
  },
  {
    href: "/tools/dog-age",
    title: "犬の年齢計算",
    desc: "体格(小型〜超大型)を考慮して人間年齢に換算",
    icon: <DogIcon />,
  },
  {
    href: "/tools/feeding-calculator",
    title: "給餌量計算",
    desc: "体重・ライフステージから1日の給餌量の目安を計算",
    icon: <CalcIcon />,
  },
  {
    href: "/tools/neuter-timing",
    title: "去勢・避妊の時期目安",
    desc: "猫・犬の去勢/避妊手術の一般的なタイミングの目安",
    icon: <HeartIcon />,
  },
  {
    href: "/tools/weight-management",
    title: "体重管理",
    desc: "BCS簡易チェックと、減量が必要な場合の安全なペースの目安",
    icon: <ScaleIcon />,
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
      <h1 className="font-serif-jp mb-2 text-xl font-semibold sm:text-2xl">計算ツール一覧</h1>
      <p className="mb-8 text-base text-muted">
        猫・犬を飼っている人に役立つ、年齢換算や給餌量計算のツールです。会員登録不要・入力内容はサーバーに送信されません。
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group rounded-2xl border border-border bg-surface p-4 shadow-sm transition active:scale-[0.98] sm:p-5 sm:hover:border-accent/40 sm:hover:shadow-md"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
              {t.icon}
            </div>
            <p className="font-semibold">{t.title}</p>
            <p className="mt-1 text-sm text-muted">{t.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4 8 9h8l3-5-3 3.5H8L5 4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9v7a6 6 0 0 0 12 0V9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DogIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 10a6 6 0 0 1 12 0v3a6 6 0 0 1-12 0v-3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 8c-1.5 0-2.5 1.5-2 3l1.5 1M19 8c1.5 0 2.5 1.5 2 3l-1.5 1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalcIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 8h8M8 12h2M12 12h2M16 12h0M8 16h2M12 16h2M16 16h0" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M12 20s-7-4.35-9.5-8.8C.7 7.9 2.1 4.5 5.5 4a5 5 0 0 1 6.5 2 5 5 0 0 1 6.5-2c3.4.5 4.8 3.9 3 7.2C19 15.65 12 20 12 20Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18M7 7h10M4 7l3 6a3 3 0 0 0 6 0l-3-6M14 7l3 6a3 3 0 0 0 6 0l-3-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
