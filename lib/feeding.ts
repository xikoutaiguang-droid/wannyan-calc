// 1日に必要なエネルギー量(kcal)と、それを食事のグラム数に換算するロジック。
//
// RER(安静時エネルギー要求量) = 70 × 体重(kg)^0.75  という、獣医療で広く使われる標準式を使用。
// そこにライフステージ・去勢避妊の有無・体型によって決まる係数(activity factor)を掛けて
// MER(1日の維持エネルギー要求量)を求める。数値は一般的な目安として公表されている範囲を採用しており、
// 個体差が大きいため、実際の給餌量は体重の増減を見ながら調整し、迷ったら獣医師に相談することが前提。

export type LifeStage =
  | "kitten_puppy_young" // 生後4ヶ月未満(成長期前半)
  | "kitten_puppy_old" // 生後4〜12ヶ月(成長期後半)
  | "adult_neutered" // 成犬・成猫、去勢/避妊済み
  | "adult_intact" // 成犬・成猫、未去勢/未避妊
  | "weight_loss" // 減量が必要
  | "senior_low_activity"; // 高齢・運動量少なめ

export const LIFE_STAGE_LABELS: Record<LifeStage, string> = {
  kitten_puppy_young: "子猫・子犬(生後4ヶ月未満)",
  kitten_puppy_old: "子猫・子犬(生後4〜12ヶ月)",
  adult_neutered: "成猫・成犬(去勢/避妊済み)",
  adult_intact: "成猫・成犬(未去勢/未避妊)",
  weight_loss: "減量が必要",
  senior_low_activity: "高齢・運動量少なめ",
};

const ACTIVITY_FACTOR: Record<LifeStage, number> = {
  kitten_puppy_young: 3.0,
  kitten_puppy_old: 2.0,
  adult_neutered: 1.6,
  adult_intact: 1.8,
  weight_loss: 1.0,
  senior_low_activity: 1.2,
};

export function calcRER(weightKg: number): number {
  if (weightKg <= 0) return 0;
  return 70 * Math.pow(weightKg, 0.75);
}

export function calcMER(weightKg: number, stage: LifeStage): number {
  return calcRER(weightKg) * ACTIVITY_FACTOR[stage];
}

// kcalPer100g: フードパッケージに記載されている「100gあたりのカロリー」
export function calcFoodGrams(merKcal: number, kcalPer100g: number): number {
  if (kcalPer100g <= 0) return 0;
  return (merKcal / kcalPer100g) * 100;
}
