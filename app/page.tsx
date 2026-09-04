import Link from "next/link";
import type { ReactNode } from "react";
import TrustBadges from "@/components/TrustBadges";
import { CatFaceIcon, DogFaceIcon, BowlIcon, NeuterHeartIcon, WeightPawIcon, HospitalIcon, PawIcon } from "@/components/PetIcons";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />
      <div aria-hidden className="pointer-events-none absolute right-6 top-6 text-accent/20 sm:right-16 sm:top-10">
        <PawIcon size={56} />
      </div>
      <div aria-hidden className="pointer-events-none absolute left-4 top-40 hidden text-accent/15 sm:block">
        <PawIcon size={34} />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-16">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent-strong sm:h-16 sm:w-16">
            <CatFaceIcon size={30} />
          </span>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent-strong sm:h-16 sm:w-16">
            <DogFaceIcon size={30} />
          </span>
          <p className="text-sm font-medium tracking-wide text-accent-strong">ねこちゃん・わんちゃんの計算ツール集</p>
        </div>
        <h1 className="font-serif-jp mb-3 text-2xl font-semibold leading-snug sm:text-3xl">
          わんにゃん計算ラボ
        </h1>
        <p className="mb-4 max-w-2xl text-base leading-relaxed text-muted">
          ねこちゃん・わんちゃんの年齢を人間年齢に換算したり、体重とライフステージから1日のごはんの量の目安を計算できる無料ツール集です。
          実際にねこちゃんを飼っている運営者が、実体験をもとに作っています。
        </p>
        <TrustBadges />

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          <NavCard
            href="/tools/cat-age"
            title="ねこちゃんの年齢計算"
            desc="ねこちゃんの年齢を人間年齢に換算"
            icon={<CatFaceIcon />}
          />
          <NavCard
            href="/tools/dog-age"
            title="わんちゃんの年齢計算"
            desc="体格を考慮して人間年齢に換算"
            icon={<DogFaceIcon />}
          />
          <NavCard
            href="/tools/feeding-calculator"
            title="ごはんの量計算"
            desc="体重・ライフステージから1日の目安量を計算"
            icon={<BowlIcon />}
          />
          <NavCard
            href="/tools/neuter-timing"
            title="去勢・避妊の時期目安"
            desc="ねこちゃん・わんちゃんの一般的なタイミングの目安"
            icon={<NeuterHeartIcon />}
          />
          <NavCard
            href="/tools/weight-management"
            title="体重管理"
            desc="BCS簡易チェックと減量ペースの目安"
            icon={<WeightPawIcon />}
          />
          <NavCard
            href="/tools/nearby-vet"
            title="近くの動物病院を探す"
            desc="現在地から近い病院を距離順に表示"
            icon={<HospitalIcon />}
          />
        </div>
      </div>
    </div>
  );
}

function NavCard({ href, title, desc, icon }: { href: string; title: string; desc: string; icon: ReactNode }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-border bg-surface p-4 shadow-sm transition active:scale-[0.98] sm:p-5 sm:hover:-translate-y-0.5 sm:hover:border-accent/40 sm:hover:shadow-md"
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-strong transition group-hover:scale-105">
        {icon}
      </div>
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted">{desc}</p>
    </Link>
  );
}
