import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileTabBar from "@/components/MobileTabBar";
import { SITE_NAME, SITE_URL, ADSENSE_PUBLISHER_ID, GSC_VERIFICATION } from "@/lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  weight: ["500", "600", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}｜猫・犬の年齢換算や給餌量が計算できる無料ツール集`,
    template: `%s｜${SITE_NAME}`,
  },
  description:
    "猫・犬の年齢を人間年齢に換算したり、体重とライフステージから1日の給餌量の目安を計算できる無料ツール集。実際に猫を飼っている運営者が実体験をもとに作成。会員登録不要。",
  keywords: ["猫 年齢 計算", "犬 年齢 計算", "ペット 給餌量 計算", "猫 人間年齢 換算", "犬 人間年齢 換算"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    title: `${SITE_NAME}｜猫・犬の年齢換算や給餌量が計算できる無料ツール集`,
    description: "猫・犬の年齢換算、1日の給餌量目安を計算できる無料ツール集",
  },
  // AdSense審査時のサイト所有権確認用(パブリッシャーID未設定のうちは出力しない)
  other: ADSENSE_PUBLISHER_ID ? { "google-adsense-account": `ca-${ADSENSE_PUBLISHER_ID}` } : undefined,
  // Google Search Consoleのサイト所有権確認用(未設定のうちは出力しない)
  verification: GSC_VERIFICATION ? { google: GSC_VERIFICATION } : undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${shipporiMincho.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {ADSENSE_PUBLISHER_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${ADSENSE_PUBLISHER_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <Nav />
        <main className="flex-1 pb-20 sm:pb-0">{children}</main>
        <Footer />
        <MobileTabBar />
        <Analytics />
      </body>
    </html>
  );
}
