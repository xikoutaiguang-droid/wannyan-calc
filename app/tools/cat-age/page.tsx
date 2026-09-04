import type { Metadata } from "next";
import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";
import CatAgeCalculator from "@/components/CatAgeCalculator";

export const metadata: Metadata = {
  title: "猫の年齢計算機｜人間年齢に換算",
  description:
    "猫の年齢を入力するだけで、人間の年齢に換算できる無料ツール。生後6ヶ月なら「0.5」のように入力可能。子猫期・成猫期・シニア期の目安も表示します。",
  alternates: { canonical: "/tools/cat-age" },
};

const faq = [
  {
    q: "猫の年齢換算はどんな計算式ですか？",
    a: "1年目で人間の15歳相当、2年目で+9歳(合計24歳)、3年目以降は1年ごとに+4歳、という動物病院などで広く使われている目安の考え方に基づいています。",
  },
  {
    q: "実際の老化速度と違うことはありますか？",
    a: "はい。個体差・体格・健康状態によって実際の老化速度は変わります。あくまで目安としてご利用ください。",
  },
];

export default function CatAgePage() {
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
      <h1 className="font-serif-jp mb-2 text-xl font-semibold sm:text-2xl">猫の年齢計算機</h1>
      <p className="mb-6 text-base text-muted">
        猫の年齢を入力すると、人間の年齢に換算した目安がわかります。うちの猫が今どのくらいのライフステージにいるか、健康管理の参考にお使いください。
      </p>
      <TrustBadges />
      <CatAgeCalculator />

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
