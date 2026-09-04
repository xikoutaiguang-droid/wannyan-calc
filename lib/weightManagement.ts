// 体重管理(BCS簡易チェック・減量ペースの目安)のロジック。
//
// BCSは触診・視診による9段階評価が本来の姿だが、ここでは家庭で答えやすい3つの質問に簡略化し、
// 「やせ気味・適正・ふとり気味」の3区分に落とし込んでいる。あくまで簡易セルフチェックであり、
// 正確な評価は動物病院での触診が必要。
//
// 減量ペースは「体重の1〜2%/週」を安全な上限の目安とする一般的な考え方を採用。
// 特に猫は急激な減量で肝リピドーシス(脂肪肝)のリスクが指摘されているため、上限を低めに設定している。

export type BcsAnswer = "thin" | "ideal" | "heavy";

export interface BcsQuestion {
  id: string;
  question: string;
  options: { value: BcsAnswer; label: string }[];
}

export const BCS_QUESTIONS: BcsQuestion[] = [
  {
    id: "ribs",
    question: "肋骨(あばら骨)を触ると?",
    options: [
      { value: "thin", label: "触らなくても骨の形がわかる" },
      { value: "ideal", label: "軽く触ると骨の形がわかる" },
      { value: "heavy", label: "しっかり押さないと骨がわからない" },
    ],
  },
  {
    id: "waist",
    question: "上から見たときのウエストのくびれは?",
    options: [
      { value: "thin", label: "くびれが強く、腰骨が目立つ" },
      { value: "ideal", label: "自然なくびれがある" },
      { value: "heavy", label: "くびれがほとんどない、または寸胴" },
    ],
  },
  {
    id: "belly",
    question: "横から見たお腹のラインは?",
    options: [
      { value: "thin", label: "お腹が大きく引き締まっている" },
      { value: "ideal", label: "胸からお腹にかけて緩やかに上がっている" },
      { value: "heavy", label: "お腹が垂れている、または膨らんでいる" },
    ],
  },
];

export interface BcsResult {
  label: string;
  note: string;
}

export function judgeBcs(answers: BcsAnswer[]): BcsResult {
  const heavyCount = answers.filter((a) => a === "heavy").length;
  const thinCount = answers.filter((a) => a === "thin").length;

  if (heavyCount >= 2) {
    return {
      label: "ふとり気味の可能性があります",
      note: "食事量や運動量を見直すタイミングかもしれません。下の減量ペース計算も参考にしてください。",
    };
  }
  if (thinCount >= 2) {
    return {
      label: "やせ気味の可能性があります",
      note: "食事量が足りているか、体調不良が隠れていないか、獣医師に相談することをおすすめします。",
    };
  }
  return {
    label: "適正体型の可能性が高いです",
    note: "今の食事・運動量を維持していきましょう。",
  };
}

export type WeightLossSpecies = "cat" | "dog";

// 安全とされる減量ペースの上限(体重に対する週あたりの割合)
const MAX_WEEKLY_LOSS_RATE: Record<WeightLossSpecies, number> = {
  cat: 0.01, // 猫は肝リピドーシスのリスクを考慮し、より慎重な上限
  dog: 0.02,
};

export interface WeightLossPlan {
  totalLossKg: number;
  weeklyLossKg: number;
  estimatedWeeks: number;
}

export function calcWeightLossPlan(
  currentKg: number,
  targetKg: number,
  species: WeightLossSpecies
): WeightLossPlan | null {
  if (currentKg <= 0 || targetKg <= 0 || targetKg >= currentKg) return null;

  const totalLossKg = currentKg - targetKg;
  const weeklyLossKg = currentKg * MAX_WEEKLY_LOSS_RATE[species];
  const estimatedWeeks = Math.ceil(totalLossKg / weeklyLossKg);

  return { totalLossKg, weeklyLossKg, estimatedWeeks };
}
