import type { Metadata } from "next";
import TrustBadges from "@/components/TrustBadges";
import WeightManagementCalculator from "@/components/WeightManagementCalculator";

export const metadata: Metadata = {
  title: "体重管理ツール｜BCS簡易チェックと減量ペースの目安",
  description:
    "猫・犬の体型を3つの質問で簡易チェックし、減量が必要な場合は安全とされるペースの目安を計算できる無料ツール。猫の急激な減量のリスクについても解説。",
  alternates: { canonical: "/tools/weight-management" },
};

const faq = [
  {
    q: "BCSチェックはどのくらい正確ですか？",
    a: "本来のBCS(ボディコンディションスコア)は獣医師が触診・視診で9段階評価するものです。このツールは家庭で答えやすいように3つの質問に簡略化した簡易セルフチェックであり、正確な評価には動物病院での触診をおすすめします。",
  },
  {
    q: "猫の減量で気をつけることは？",
    a: "猫は急激な減量により「肝リピドーシス(脂肪肝)」という重篤な病気を起こすリスクが指摘されています。自己判断での断食・急な食事制限は避け、必ず獣医師の指導のもとで進めてください。",
  },
];

export default function WeightManagementPage() {
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
      <h1 className="font-serif-jp mb-2 text-xl font-semibold sm:text-2xl">体重管理ツール</h1>
      <p className="mb-6 text-base text-muted">
        簡単な質問で体型をセルフチェックし、減量が必要な場合は安全とされるペースの目安を計算できます。
      </p>
      <TrustBadges />
      <WeightManagementCalculator />

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
