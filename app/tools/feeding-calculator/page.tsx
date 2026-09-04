import type { Metadata } from "next";
import TrustBadges from "@/components/TrustBadges";
import FeedingCalculator from "@/components/FeedingCalculator";

export const metadata: Metadata = {
  title: "ペット給餌量計算機｜猫・犬の1日の食事量の目安",
  description:
    "体重・ライフステージ・フードのカロリー(kcal/100g)を入力するだけで、猫・犬の1日の給餌量の目安を計算できる無料ツール。獣医療で使われるRER/MERの標準式を採用。",
  alternates: { canonical: "/tools/feeding-calculator" },
};

const faq = [
  {
    q: "どんな計算式を使っていますか？",
    a: "安静時エネルギー要求量(RER = 70 × 体重(kg)^0.75)に、ライフステージごとの係数をかけて1日の必要カロリー(MER)を求め、フードのカロリー密度で割ってグラム数に換算しています。獣医療で広く使われる標準的な考え方です。",
  },
  {
    q: "計算結果通りに与えれば大丈夫ですか？",
    a: "あくまで目安です。個体差が大きいため、実際に与えながら体重の増減を見て量を調整してください。持病がある場合や不安な場合はかかりつけの獣医師にご相談ください。",
  },
];

export default function FeedingCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="font-serif-jp mb-2 text-xl font-semibold sm:text-2xl">給餌量計算機</h1>
      <p className="mb-6 text-base text-muted">
        体重・ライフステージ・フードのカロリー表示を入力すると、1日の給餌量の目安がわかります。猫・犬どちらにも使えます。
      </p>
      <TrustBadges />
      <FeedingCalculator />

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="font-serif-jp mb-4 text-lg font-semibold">よくある質問</h2>
        <dl className="flex flex-col gap-5">
          {faq.map((f) => (
            <div key={f.q}>
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1 text-sm text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
