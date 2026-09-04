import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BowlIcon, NeuterHeartIcon, WeightPawIcon, HospitalIcon } from "@/components/PetIcons";

export const metadata: Metadata = {
  title: "計算ツール一覧",
  description: "猫・犬の年齢換算、1日の給餌量計算など、ペットを飼っている人に役立つ無料ツール集。",
  alternates: { canonical: "/tools" },
};

const tools = [
  {
    href: "/tools/cat-age",
    title: "ねこちゃんの年齢計算",
    desc: "ねこちゃんの年齢を人間年齢に換算",
    imgSrc: "/images/cat-face-icon.png",
  },
  {
    href: "/tools/dog-age",
    title: "わんちゃんの年齢計算",
    desc: "体格(小型〜超大型)を考慮して人間年齢に換算",
    imgSrc: "/images/dog-face-icon.png",
  },
  {
    href: "/tools/feeding-calculator",
    title: "ごはんの量計算",
    desc: "体重・ライフステージから1日のごはんの量の目安を計算",
    icon: <BowlIcon />,
  },
  {
    href: "/tools/neuter-timing",
    title: "去勢・避妊の時期目安",
    desc: "ねこちゃん・わんちゃんの去勢/避妊手術の一般的なタイミングの目安",
    icon: <NeuterHeartIcon />,
  },
  {
    href: "/tools/weight-management",
    title: "体重管理",
    desc: "BCS簡易チェックと、減量が必要な場合の安全なペースの目安",
    icon: <WeightPawIcon />,
  },
  {
    href: "/tools/nearby-vet",
    title: "近くの動物病院を探す",
    desc: "現在地から近い動物病院を距離順に表示。緊急時は電話確認を",
    icon: <HospitalIcon />,
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
      <h1 className="font-serif-jp mb-2 text-xl font-semibold sm:text-2xl">計算ツール一覧</h1>
      <p className="mb-8 text-base text-muted">
        ねこちゃん・わんちゃんを飼っている人に役立つ、年齢換算やごはんの量計算のツールです。会員登録不要・入力内容はサーバーに送信されません。
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group rounded-2xl border border-border bg-surface p-4 shadow-sm transition active:scale-[0.98] sm:p-5 sm:hover:-translate-y-0.5 sm:hover:border-accent/40 sm:hover:shadow-md"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-accent-soft text-accent-strong transition group-hover:scale-105">
              {t.imgSrc ? (
                <Image src={t.imgSrc} alt="" width={48} height={48} className="h-full w-full object-cover" />
              ) : (
                t.icon
              )}
            </div>
            <p className="font-semibold">{t.title}</p>
            <p className="mt-1 text-sm text-muted">{t.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
