import Link from "next/link";
import { SITE_NAME } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-6 text-xs leading-relaxed text-muted">
        <p>
          {SITE_NAME}の計算結果は、獣医療で一般的に用いられる目安の計算式に基づく参考値です。
          個体差・犬種猫種・健康状態により実際の数値とは異なります。
          健康や食事に関する最終的な判断は、必ずかかりつけの獣医師にご相談ください。
        </p>
        <p className="mt-3 flex flex-wrap gap-x-4">
          <Link href="/about" className="hover:text-accent hover:underline">
            このサイトについて
          </Link>
          <Link href="/privacy" className="hover:text-accent hover:underline">
            プライバシーポリシー
          </Link>
        </p>
      </div>
    </footer>
  );
}
