import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${SITE_NAME}のプライバシーポリシー。`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
      <h1 className="font-serif-jp mb-6 text-xl font-semibold sm:text-2xl">プライバシーポリシー</h1>
      <div className="flex flex-col gap-6 text-sm leading-relaxed text-foreground/90">
        <section>
          <h2 className="mb-2 text-base font-semibold">計算ツールの入力内容について</h2>
          <p>
            当サイトの計算ツールに入力された数値(体重・年齢など)は、お使いのブラウザ内だけで処理されます。サーバーへの送信・保存は行っていません。
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-base font-semibold">アクセス解析について</h2>
          <p>
            当サイトはVercel Analyticsを利用してアクセス状況を分析することがあります。個人を特定する情報は取得していません。
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-base font-semibold">広告について</h2>
          <p>
            当サイトは第三者配信の広告サービス(Googleアドセンス等)を利用する場合があります。
            このような広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
            Cookieを無効にする方法や広告の設定については、Googleの広告設定ページなど、各広告配信事業者のポリシーをご確認ください。
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-base font-semibold">アフィリエイトプログラムについて</h2>
          <p>
            当サイトは、商品・サービスの紹介にあたりアフィリエイトプログラムを利用する場合があります。紹介するリンクを経由して商品・サービスが購入された場合、当サイト運営者が紹介料を受け取ることがあります。
          </p>
        </section>
      </div>
    </div>
  );
}
