import type { Metadata } from "next";
import TrustBadges from "@/components/TrustBadges";
import NeuterTimingGuide from "@/components/NeuterTimingGuide";

export const metadata: Metadata = {
  title: "去勢・避妊のタイミング目安｜猫・犬",
  description:
    "猫・犬の去勢・避妊手術の一般的な時期の目安がわかるツール。犬は体格によって推奨時期が異なる傾向を反映。最終判断は獣医師への相談が前提です。",
  alternates: { canonical: "/tools/neuter-timing" },
};

const faq = [
  {
    q: "このツールで実施時期を決めていいですか？",
    a: "いいえ。ここに表示される時期は一般的に紹介されている目安であり、医療的な指示ではありません。個体の健康状態や成長スピードによって適切な時期は変わるため、実施の可否・時期は必ずかかりつけの獣医師にご相談ください。",
  },
  {
    q: "大型犬はなぜ時期が違うのですか？",
    a: "大型犬・超大型犬は骨や関節の成長が完了するまでに時間がかかるため、成長期のうちに手術を行うと関節疾患のリスクに影響する可能性が指摘されています。そのため、成長が落ち着く生後12〜18ヶ月頃まで待つことを勧める獣医師もいます。",
  },
];

export default function NeuterTimingPage() {
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
      <h1 className="font-serif-jp mb-2 text-xl font-semibold sm:text-2xl">去勢・避妊のタイミング目安</h1>
      <p className="mb-6 text-base text-muted">
        猫・犬の去勢・避妊手術について、一般的に紹介されている時期の目安がわかります。
      </p>
      <TrustBadges />
      <NeuterTimingGuide />

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
