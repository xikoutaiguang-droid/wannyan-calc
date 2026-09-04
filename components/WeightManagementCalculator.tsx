"use client";

import { useState } from "react";
import {
  BCS_QUESTIONS,
  judgeBcs,
  calcWeightLossPlan,
  type BcsAnswer,
  type WeightLossSpecies,
} from "@/lib/weightManagement";

export default function WeightManagementCalculator() {
  const [answers, setAnswers] = useState<Record<string, BcsAnswer>>({});
  const [species, setSpecies] = useState<WeightLossSpecies>("cat");
  const [currentInput, setCurrentInput] = useState<string>("5");
  const [targetInput, setTargetInput] = useState<string>("4.5");

  const answeredAll = BCS_QUESTIONS.every((q) => answers[q.id]);
  const bcsResult = answeredAll ? judgeBcs(Object.values(answers)) : null;

  const currentKg = Number(currentInput);
  const targetKg = Number(targetInput);
  const plan =
    Number.isFinite(currentKg) && Number.isFinite(targetKg)
      ? calcWeightLossPlan(currentKg, targetKg, species)
      : null;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="font-serif-jp mb-3 text-lg font-semibold">STEP1: 体型の簡易セルフチェック</h2>
        <div className="flex flex-col gap-5">
          {BCS_QUESTIONS.map((q) => (
            <div key={q.id}>
              <p className="mb-2 text-sm font-medium">{q.question}</p>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {q.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.value }))}
                    className={`rounded-lg border px-3 py-2 text-left text-sm ${
                      answers[q.id] === opt.value
                        ? "border-accent bg-accent-soft text-accent-strong"
                        : "border-border bg-surface"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {bcsResult && (
          <div className="mt-5 rounded-2xl border border-accent/40 bg-accent-soft/60 p-5">
            <p className="text-lg font-bold text-accent-strong">{bcsResult.label}</p>
            <p className="mt-2 text-sm text-foreground/90">{bcsResult.note}</p>
          </div>
        )}
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="font-serif-jp mb-3 text-lg font-semibold">STEP2: 減量ペースの目安</h2>
        <p className="mb-4 text-sm text-muted">
          獣医師から減量を勧められている場合の、安全とされるペースの目安を計算します。
        </p>
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-muted">対象</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSpecies("cat")}
                className={`min-h-11 rounded-lg border px-4 text-base ${
                  species === "cat" ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface"
                }`}
              >
                猫
              </button>
              <button
                type="button"
                onClick={() => setSpecies("dog")}
                className={`min-h-11 rounded-lg border px-4 text-base ${
                  species === "dog" ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface"
                }`}
              >
                犬
              </button>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-muted">現在の体重(kg)</label>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.1"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              className="w-28 min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-base"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-muted">目標体重(kg)</label>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.1"
              value={targetInput}
              onChange={(e) => setTargetInput(e.target.value)}
              className="w-28 min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-base"
            />
          </div>
        </div>

        {!plan ? (
          <p className="mt-6 text-sm text-red-600 dark:text-red-400">
            目標体重は現在の体重より軽い値を入力してください。
          </p>
        ) : (
          <div className="mt-6 rounded-2xl border border-accent/40 bg-accent-soft/60 p-5">
            <p className="text-sm text-muted">安全とされる減量ペースの目安</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-accent-strong">
              週あたり 約 {plan.weeklyLossKg.toLocaleString(undefined, { maximumFractionDigits: 2 })} kg まで
            </p>
            <p className="mt-2 text-sm text-foreground/90">
              目標達成までの目安期間: 約 {plan.estimatedWeeks} 週間({Math.ceil(plan.estimatedWeeks / 4.3)}ヶ月ほど)
            </p>
            {species === "cat" && (
              <p className="mt-3 text-sm font-medium text-foreground/90">
                猫は急激な減量により「肝リピドーシス(脂肪肝)」という重篤な病気を起こすリスクが指摘されています。
                自己判断での断食・急な食事制限は避け、必ず獣医師の指導のもとで進めてください。
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
