"use client";

import { useState } from "react";
import { getCatNeuterGuidance, getDogNeuterGuidance, type Species } from "@/lib/neuterTiming";
import { DOG_SIZE_LABELS, type DogSize } from "@/lib/petAge";

const DOG_SIZES = Object.keys(DOG_SIZE_LABELS) as DogSize[];

export default function NeuterTimingGuide() {
  const [species, setSpecies] = useState<Species>("cat");
  const [dogSize, setDogSize] = useState<DogSize>("medium");

  const guidance = species === "cat" ? getCatNeuterGuidance() : getDogNeuterGuidance(dogSize);

  return (
    <div>
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
              ねこ
            </button>
            <button
              type="button"
              onClick={() => setSpecies("dog")}
              className={`min-h-11 rounded-lg border px-4 text-base ${
                species === "dog" ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface"
              }`}
            >
              わんこ
            </button>
          </div>
        </div>
        {species === "dog" && (
          <div>
            <label className="mb-1 block text-xs font-medium text-muted">体格</label>
            <select
              value={dogSize}
              onChange={(e) => setDogSize(e.target.value as DogSize)}
              className="min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-base"
            >
              {DOG_SIZES.map((s) => (
                <option key={s} value={s}>
                  {DOG_SIZE_LABELS[s]}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="mt-6 rounded-2xl border border-accent/40 bg-accent-soft/60 p-5">
        <p className="text-sm text-muted">一般的な目安の時期</p>
        <p className="mt-1 text-xl font-bold text-accent-strong">{guidance.timingLabel}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/90">{guidance.reasonNote}</p>
      </div>

      <p className="mt-4 text-sm font-medium text-foreground/90">
        これは一般的に紹介されている目安であり、医療的な指示ではありません。個体の健康状態や成長スピードによって適切な時期は変わるため、実施の可否・時期は必ずかかりつけの獣医師にご相談ください。
      </p>
    </div>
  );
}
