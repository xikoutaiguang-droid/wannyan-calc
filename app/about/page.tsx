import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このサイトについて",
  description: "わんにゃん計算ラボの運営方針について。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
      <h1 className="font-serif-jp mb-6 text-xl font-semibold sm:text-2xl">このサイトについて</h1>
      <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/90">
        <p>
          「わんにゃん計算ラボ」は、猫・犬の年齢換算や給餌量計算など、ペットを飼っている人の日常に役立つ無料の計算ツールを提供しているサイトです。
        </p>
        <p>
          運営者は実際に猫を飼っており(過去には犬も飼っていました)、実生活で「うちの子は人間でいうと何歳くらい?」「フードはどのくらいあげればいいの?」と感じた疑問をもとにツールを作っています。
        </p>
        <p>
          計算結果は、獣医療で一般的に用いられている目安の計算式に基づく参考値です。個体差・犬種猫種・健康状態によって実際の数値とは異なります。健康や食事に関する最終的な判断は、必ずかかりつけの獣医師にご相談ください。
        </p>
        <p>各ツールはすべて会員登録不要で、入力した内容がサーバーに送信されることはありません。</p>
      </div>
    </div>
  );
}
