// 猫・犬の年齢を人間年齢に換算するロジック。
//
// 出典の考え方: 「1年目=15歳相当、2年目で+9歳(合計24歳)、以降は毎年一定数を加算」という
// 動物病院・ペット保険会社などで広く使われている目安の考え方をベースにしている。
// 犬は体格が大きいほど老化が早く進む傾向があるため、体格区分ごとに3年目以降の加算値を変えている。
// あくまで目安であり、個体差・犬種・健康状態によって実際の老化速度は変わる。

export type DogSize = "small" | "medium" | "large" | "giant";

export const DOG_SIZE_LABELS: Record<DogSize, string> = {
  small: "小型犬(〜10kg目安)",
  medium: "中型犬(10〜25kg目安)",
  large: "大型犬(25〜40kg目安)",
  giant: "超大型犬(40kg〜目安)",
};

const DOG_SIZE_CURVE: Record<DogSize, { year1: number; year2Add: number; perYearAfter: number }> = {
  small: { year1: 15, year2Add: 9, perYearAfter: 4 },
  medium: { year1: 15, year2Add: 9, perYearAfter: 5 },
  large: { year1: 14, year2Add: 10, perYearAfter: 6 },
  giant: { year1: 12, year2Add: 9, perYearAfter: 7 },
};

const CAT_CURVE = { year1: 15, year2Add: 9, perYearAfter: 4 };

function ageFromCurve(ageYears: number, curve: { year1: number; year2Add: number; perYearAfter: number }): number {
  if (ageYears <= 0) return 0;
  if (ageYears < 1) return ageYears * curve.year1;
  if (ageYears < 2) return curve.year1 + (ageYears - 1) * curve.year2Add;
  return curve.year1 + curve.year2Add + (ageYears - 2) * curve.perYearAfter;
}

export function calcCatHumanAge(ageYears: number): number {
  return ageFromCurve(ageYears, CAT_CURVE);
}

export function calcDogHumanAge(ageYears: number, size: DogSize): number {
  return ageFromCurve(ageYears, DOG_SIZE_CURVE[size]);
}

export function getCatLifeStage(ageYears: number): string {
  if (ageYears < 1) return "子猫期";
  if (ageYears < 7) return "成猫期";
  if (ageYears < 11) return "シニア期の入り口";
  return "高齢期";
}

// 大型犬・超大型犬ほどシニア期に入るのが早いとされる一般的な傾向を反映
const DOG_SENIOR_START: Record<DogSize, number> = {
  small: 8,
  medium: 7,
  large: 6,
  giant: 5,
};

export function getDogLifeStage(ageYears: number, size: DogSize): string {
  if (ageYears < 1) return "子犬期";
  if (ageYears < DOG_SENIOR_START[size]) return "成犬期";
  if (ageYears < DOG_SENIOR_START[size] + 4) return "シニア期の入り口";
  return "高齢期";
}
