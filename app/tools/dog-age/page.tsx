import type { Metadata } from "next";
import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";
import DogAgeCalculator from "@/components/DogAgeCalculator";

export const metadata: Metadata = {
  title: "犬の年齢計算機｜体格別に人間年齢へ換算",
  description:
    "犬の年齢と体格(小型・中型・大型・超大型)を入力するだけで、人間の年齢に換算できる無料ツール。大型犬ほど老化が早い傾向を反映しています。",
  alternates: { canonical: "/tools/dog-age" },
};

const faq = [
  {
    q: "犬種によって年齢換算は変わりますか？",
    a: "犬種そのものより体格(体重)の影響が大きいとされているため、このツールでは体格区分(小型・中型・大型・超大型)を選んで計算します。",
  },
  {
    q: "なぜ大型犬の方が老化が早いのですか？",
    a: "大型犬・超大型犬は成長期は比較的ゆっくりですが、成犬になった後の老化の進み方が早く、平均寿命も小型犬より短い傾向があるとされています。",
  },
];

export default function DogAgePage() {
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
      <h1 className="font-serif-jp mb-2 text-xl font-semibold sm:text-2xl">わんちゃんの年齢計算機</h1>
      <p className="mb-6 text-base text-muted">
        わんちゃんの年齢と体格を入力すると、人間の年齢に換算した目安がわかります。健康管理やシニア期に向けた準備の参考にお使いください。
      </p>
      <TrustBadges />
      <DogAgeCalculator />

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

      <p className="mt-8 text-sm">
        <Link href="/tools/feeding-calculator" className="text-accent-strong hover:underline">
          給餌量計算ツールで1日の食事量を計算する →
        </Link>
      </p>
    </div>
  );
}
