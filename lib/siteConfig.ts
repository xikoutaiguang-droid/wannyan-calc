// デプロイ先が決まったら実際のドメインに差し替えること。
// metadataBase・sitemap・robots.txtのSitemap行が全てここを参照する。
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
export const SITE_NAME = "わんにゃん計算ラボ";

// 運営者情報。実際に猫(過去には犬も)を飼っている実体験をベースに運営していることを明記する。
export const OPERATOR_NAME = "運営者";

// Google AdSenseのパブリッシャーID("pub-"に続く数字。"ca-pub-"ではなく"pub-"部分のみ)。
// AdSenseの審査に通ってから発行される値をここへ設定する。空のままだと広告タグ・ads.txtは
// 出力されない(誤った値で審査に不利益を与えないため)。
export const ADSENSE_PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? "";

// Google Search Consoleのサイト所有権確認用コード(HTMLタグ方式のcontent属性の値のみ)。
export const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "";

// ペットフード・ペット保険などのアフィリエイトリンク。ASP提携が完了するまでは空のままにし、
// 各コンポーネント側で「値がある場合のみ表示」する(未設定なら黙って出さない設計)。
export const AFFILIATE_CAT_FOOD_URL = process.env.NEXT_PUBLIC_AFFILIATE_CAT_FOOD_URL ?? "";
export const AFFILIATE_DOG_FOOD_URL = process.env.NEXT_PUBLIC_AFFILIATE_DOG_FOOD_URL ?? "";
export const AFFILIATE_PET_INSURANCE_URL = process.env.NEXT_PUBLIC_AFFILIATE_PET_INSURANCE_URL ?? "";
