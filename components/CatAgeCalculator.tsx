"use client";

import { useState } from "react";
import { calcCatHumanAge, getCatLifeStage } from "@/lib/petAge";
import {
  AFFILIATE_SENIOR_CAT_SUPPLEMENT_URL,
  AFFILIATE_SENIOR_CAT_SUPPLEMENT_PIXEL,
  AFFILIATE_LIVER_SUPPLEMENT_URL,
  AFFILIATE_LIVER_SUPPLEMENT_PIXEL,
  AFFILIATE_JOINT_SUPPLEMENT_URL,
  AFFILIATE_JOINT_SUPPLEMENT_PIXEL,
  AFFILIATE_EYE_SUPPLEMENT_URL,
  AFFILIATE_EYE_SUPPLEMENT_PIXEL,
  AFFILIATE_HEART_SUPPLEMENT_URL,
  AFFILIATE_HEART_SUPPLEMENT_PIXEL,
  AFFILIATE_CATLOG_URL,
  AFFILIATE_CATLOG_PIXEL,
} from "@/lib/siteConfig";
import AffiliateBanner from "@/components/AffiliateBanner";
import AffiliateSupplementList from "@/components/AffiliateSupplementList";

const SENIOR_SUPPLEMENTS = [
  { concern: "総合", label: "毎日一緒(DHA＆EPA)", url: AFFILIATE_SENIOR_CAT_SUPPLEMENT_URL, pixelUrl: AFFILIATE_SENIOR_CAT_SUPPLEMENT_PIXEL },
  { concern: "肝臓", label: "毎日良肝(肝臓エキス＆プラセンタ)", url: AFFILIATE_LIVER_SUPPLEMENT_URL, pixelUrl: AFFILIATE_LIVER_SUPPLEMENT_PIXEL },
  { concern: "関節", label: "毎日散歩(グルコサミン＆イミダゾールペプチド)", url: AFFILIATE_JOINT_SUPPLEMENT_URL, pixelUrl: AFFILIATE_JOINT_SUPPLEMENT_PIXEL },
  { concern: "目", label: "毎日愛眼(ブルーベリー＆ルテイン)", url: AFFILIATE_EYE_SUPPLEMENT_URL, pixelUrl: AFFILIATE_EYE_SUPPLEMENT_PIXEL },
  { concern: "心臓", label: "毎日健心(コエンザイムQ10＆フランス海岸松)", url: AFFILIATE_HEART_SUPPLEMENT_URL, pixelUrl: AFFILIATE_HEART_SUPPLEMENT_PIXEL },
].filter((item) => item.url);

export default function CatAgeCalculator() {
  const [ageInput, setAgeInput] = useState<string>("2");

  const ageYears = Number(ageInput);
  const isValid = Number.isFinite(ageYears) && ageYears >= 0 && ageInput.trim() !== "";
  const humanAge = isValid ? calcCatHumanAge(ageYears) : 0;
  const lifeStage = isValid ? getCatLifeStage(ageYears) : "";
  const isSenior = lifeStage === "シニア期の入り口" || lifeStage === "高齢期";

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-muted">猫の年齢(年)</label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            step="0.1"
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
            className="w-32 min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-base"
          />
          <p className="mt-1 text-xs text-muted">生後6ヶ月なら「0.5」のように入力できます</p>
        </div>
      </div>

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
        <AffiliateSupplementList heading="気になる部位から選ぶ猫用サプリ" items={SENIOR_SUPPLEMENTS} />
      )}

      {AFFILIATE_CATLOG_URL && (
        <AffiliateBanner
          url={AFFILIATE_CATLOG_URL}
          pixelUrl={AFFILIATE_CATLOG_PIXEL || undefined}
          label="すべては猫様のために【Catlog】"
        />
      )}
    </div>
  );
}
