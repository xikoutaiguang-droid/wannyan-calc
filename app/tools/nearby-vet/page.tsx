import type { Metadata } from "next";
import NearbyVetFinder from "@/components/NearbyVetFinder";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "近くの動物病院を探す",
  description:
    "現在地から近い動物病院をGoogleマップの情報をもとに検索します。営業中かどうかの目安も表示されます。緊急時は必ず来院前に電話でご確認ください。",
  alternates: { canonical: "/tools/nearby-vet" },
};

export default function NearbyVetPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
      <h1 className="font-serif-jp mb-2 text-xl font-semibold sm:text-2xl">近くの動物病院を探す</h1>
      <p className="mb-6 text-base text-muted">
        現在地から近い動物病院を距離順に表示します。病院名の下の「電話する」からすぐに発信できます。
      </p>
      <TrustBadges
        items={["取得した位置情報は保存されず、この検索のためだけに使われます", "位置情報を許可しなくても他の機能は通常どおり使えます"]}
      />
      <NearbyVetFinder />
    </div>
  );
}
