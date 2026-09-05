"use client";

import { useState } from "react";
import { calcMER, calcFoodGrams, LIFE_STAGE_LABELS, type LifeStage } from "@/lib/feeding";
import { AFFILIATE_GUT_SUPPLEMENT_URL, AFFILIATE_GUT_SUPPLEMENT_PIXEL } from "@/lib/siteConfig";
import AffiliateBanner from "@/components/AffiliateBanner";

const STAGES = Object.keys(LIFE_STAGE_LABELS) as LifeStage[];

export default function FeedingCalculator() {
  const [weightInput, setWeightInput] = useState<string>("4");
  const [stage, setStage] = useState<LifeStage>("adult_neutered");
  const [kcalPer100gInput, setKcalPer100gInput] = useState<string>("350");

  const weightKg = Number(weightInput);
  const kcalPer100g = Number(kcalPer100gInput);
  const isValid =
    Number.isFinite(weightKg) && weightKg > 0 && Number.isFinite(kcalPer100g) && kcalPer100g > 0;

  const merKcal = isValid ? calcMER(weightKg, stage) : 0;
  const foodGrams = isValid ? calcFoodGrams(merKcal, kcalPer100g) : 0;

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-muted">体重(kg)</label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            step="0.1"
            value={weightInput}
            onChange={(e) => setWeightInput(e.target.value)}
            className="w-28 min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-base"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-muted">ライフステージ</label>
          <select
            value={stage}
            onChange={(e) => setStage(e.target.value as LifeStage)}
            className="min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-base"
          >
            {STAGES.map((s) => (
              <option key={s} value={s}>
                {LIFE_STAGE_LABELS[s]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-muted">フードの100gあたりkcal</label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            step="1"
            value={kcalPer100gInput}
            onChange={(e) => setKcalPer100gInput(e.target.value)}
            className="w-32 min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-base"
          />
          <p className="mt-1 text-xs text-muted">フードの袋の表示を確認して入力してください</p>
        </div>
      </div>

      {!isValid ? (
        <p className="mt-6 text-sm text-red-600 dark:text-red-400">体重・カロリーは0より大きい数値を入力してください。</p>
      ) : (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-accent/40 bg-accent-soft/60 p-5">
            <p className="text-sm text-muted">1日の目安カロリー</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-accent-strong">
              約 {merKcal.toLocaleString(undefined, { maximumFractionDigits: 0 })} kcal
            </p>
          </div>
          <div className="rounded-2xl border border-accent/40 bg-accent-soft/60 p-5">
            <p className="text-sm text-muted">1日の目安給餌量</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-accent-strong">
              約 {foodGrams.toLocaleString(undefined, { maximumFractionDigits: 0 })} g
            </p>
            <p className="mt-1 text-xs text-muted">
              1日2回なら1回 {(foodGrams / 2).toLocaleString(undefined, { maximumFractionDigits: 0 })} g が目安
            </p>
          </div>
        </div>
      )}

      {isValid && AFFILIATE_GUT_SUPPLEMENT_URL && (
        <AffiliateBanner
          url={AFFILIATE_GUT_SUPPLEMENT_URL}
          pixelUrl={AFFILIATE_GUT_SUPPLEMENT_PIXEL || undefined}
          label="猫用サプリ「腸の健康維持に」獣医師がおススメ【毎日爽快 植物酵素＆乳酸菌】"
        />
      )}
    </div>
  );
}
