"use client";

import { useState } from "react";
import { calcDogHumanAge, getDogLifeStage, DOG_SIZE_LABELS, type DogSize } from "@/lib/petAge";
import {
  AFFILIATE_DOG_FOOD_URL,
  AFFILIATE_DOG_FOOD_PIXEL,
  AFFILIATE_SMALL_DOG_FOOD_URL,
  AFFILIATE_SMALL_DOG_FOOD_PIXEL,
  AFFILIATE_LARGE_DOG_FOOD_URL,
  AFFILIATE_LARGE_DOG_FOOD_PIXEL,
  AFFILIATE_DOG_WALK_ACCESSORY_URL,
  AFFILIATE_DOG_WALK_ACCESSORY_PIXEL,
  AFFILIATE_DOG_HEALTH_SUPPLEMENT_URL,
  AFFILIATE_DOG_HEALTH_SUPPLEMENT_PIXEL,
  AFFILIATE_DOG_EYE_SUPPLEMENT_URL,
  AFFILIATE_DOG_EYE_SUPPLEMENT_PIXEL,
  AFFILIATE_SENIOR_DOG_FOOD_URL,
  AFFILIATE_SENIOR_DOG_FOOD_PIXEL,
} from "@/lib/siteConfig";
import AffiliateBanner from "@/components/AffiliateBanner";
import AffiliateSupplementList from "@/components/AffiliateSupplementList";

const SIZES = Object.keys(DOG_SIZE_LABELS) as DogSize[];

const SENIOR_DOG_SUPPLEMENTS = [
  { concern: "総合", label: "安心犬活", url: AFFILIATE_DOG_HEALTH_SUPPLEMENT_URL, pixelUrl: AFFILIATE_DOG_HEALTH_SUPPLEMENT_PIXEL },
  { concern: "目", label: "毎日愛眼(ブルーベリー＆ルテイン)犬用", url: AFFILIATE_DOG_EYE_SUPPLEMENT_URL, pixelUrl: AFFILIATE_DOG_EYE_SUPPLEMENT_PIXEL },
].filter((item) => item.url);

export default function DogAgeCalculator() {
  const [ageInput, setAgeInput] = useState<string>("2");
  const [size, setSize] = useState<DogSize>("medium");

  const ageYears = Number(ageInput);
  const isValid = Number.isFinite(ageYears) && ageYears >= 0 && ageInput.trim() !== "";
  const humanAge = isValid ? calcDogHumanAge(ageYears, size) : 0;
  const lifeStage = isValid ? getDogLifeStage(ageYears, size) : "";
  const isSenior = lifeStage === "シニア期の入り口" || lifeStage === "高齢期";

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-muted">犬の年齢(年)</label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            step="0.1"
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
            className="w-32 min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-base"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-muted">体格</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as DogSize)}
            className="min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-base"
          >
            {SIZES.map((s) => (
              <option key={s} value={s}>
                {DOG_SIZE_LABELS[s]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="mt-2 text-xs text-muted">
        大型犬・超大型犬ほど、成犬になったあとの老化が早いとされる一般的な傾向を反映しています
      </p>

      {!isValid ? (
        <p className="mt-6 text-sm text-red-600 dark:text-red-400">0以上の数値を入力してください。</p>
      ) : (
        <div className="mt-6 rounded-2xl border border-accent/40 bg-accent-soft/60 p-5">
          <p className="text-sm text-muted">人間の年齢に換算すると</p>
          <p className="mt-1 text-3xl font-bold tabular-nums text-accent-strong">
            約 {humanAge.toLocaleString(undefined, { maximumFractionDigits: 1 })} 歳
          </p>
          <p className="mt-2 text-sm font-medium">{lifeStage}</p>
        </div>
      )}

      {isValid && isSenior && (
        <AffiliateSupplementList heading="気になる部位から選ぶ犬用サプリ" items={SENIOR_DOG_SUPPLEMENTS} />
      )}

      {isValid && isSenior && AFFILIATE_SENIOR_DOG_FOOD_URL && (
        <AffiliateBanner
          url={AFFILIATE_SENIOR_DOG_FOOD_URL}
          pixelUrl={AFFILIATE_SENIOR_DOG_FOOD_PIXEL || undefined}
          label="シニア犬の健康を、毎日の食事からトータルサポート！【モグワンドッグフード シニア用】"
        />
      )}

      {AFFILIATE_DOG_FOOD_URL && (
        <AffiliateBanner
          url={AFFILIATE_DOG_FOOD_URL}
          pixelUrl={AFFILIATE_DOG_FOOD_PIXEL || undefined}
          label="カナガンドッグフード ハイランドフィースト"
        />
      )}

      {size === "small" && AFFILIATE_SMALL_DOG_FOOD_URL && (
        <AffiliateBanner
          url={AFFILIATE_SMALL_DOG_FOOD_URL}
          pixelUrl={AFFILIATE_SMALL_DOG_FOOD_PIXEL || undefined}
          label="小型犬が喜びサポートする選び抜いた厳選素材"
        />
      )}

      {size !== "small" && AFFILIATE_LARGE_DOG_FOOD_URL && (
        <AffiliateBanner
          url={AFFILIATE_LARGE_DOG_FOOD_URL}
          pixelUrl={AFFILIATE_LARGE_DOG_FOOD_PIXEL || undefined}
          label="中大型犬向けのプレミアフード ウルフインサイト"
        />
      )}

      {AFFILIATE_DOG_WALK_ACCESSORY_URL && (
        <AffiliateBanner
          url={AFFILIATE_DOG_WALK_ACCESSORY_URL}
          pixelUrl={AFFILIATE_DOG_WALK_ACCESSORY_PIXEL || undefined}
          label="犬の散歩の必需品＋【うんキャッチ】で手づかみにサヨナラ。"
        />
      )}
    </div>
  );
}
