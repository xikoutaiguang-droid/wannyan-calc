// 去勢・避妊のタイミングに関する一般的な目安情報。
//
// これは診断や医療的な指示ではなく、動物病院・獣医師会などで広く紹介されている「一般的な目安」を
// 種別・体格ごとにまとめた参考情報。個体の健康状態・成長スピード・生活環境によって適切な時期は
// 変わるため、実施時期の最終判断は必ずかかりつけの獣医師と相談することを前提にしている。

import type { DogSize } from "./petAge";

export type Species = "cat" | "dog";

export interface NeuterGuidance {
  timingLabel: string;
  reasonNote: string;
}

export function getCatNeuterGuidance(): NeuterGuidance {
  return {
    timingLabel: "生後5〜6ヶ月頃が一般的な目安です",
    reasonNote:
      "最初の発情が来る前に実施することで、望まない妊娠や特定の病気のリスク低下が期待できるとされています。体格の成長が早い個体では、体重が2kgを超えた時点で実施可能と判断されることもあります。",
  };
}

export function getDogNeuterGuidance(size: DogSize): NeuterGuidance {
  if (size === "small" || size === "medium") {
    return {
      timingLabel: "生後6ヶ月頃が一般的な目安です",
      reasonNote:
        "最初の発情が来る前後のタイミングで実施されることが多いです。個体の発育状況によって前後することがあります。",
    };
  }
  return {
    timingLabel: "生後12〜18ヶ月頃まで待つことを勧める獣医師もいます",
    reasonNote:
      "大型犬・超大型犬は骨や関節の成長が完了するまでに時間がかかるため、成長期のうちに実施すると関節疾患のリスクに影響する可能性が指摘されています。かかりつけの獣医師と相談のうえ時期を決めることをおすすめします。",
  };
}
