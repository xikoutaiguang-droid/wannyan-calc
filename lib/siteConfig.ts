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
// 猫の年齢計算ページに常時表示(プレミアムキャットフード『ジャガー』)
export const AFFILIATE_CAT_FOOD_URL = process.env.NEXT_PUBLIC_AFFILIATE_CAT_FOOD_URL ?? "";
export const AFFILIATE_CAT_FOOD_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_CAT_FOOD_PIXEL ?? "";
// 犬の年齢計算ページに常時表示(カナガンドッグフード ハイランドフィースト)
export const AFFILIATE_DOG_FOOD_URL = process.env.NEXT_PUBLIC_AFFILIATE_DOG_FOOD_URL ?? "";
export const AFFILIATE_DOG_FOOD_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_DOG_FOOD_PIXEL ?? "";
export const AFFILIATE_PET_INSURANCE_URL = process.env.NEXT_PUBLIC_AFFILIATE_PET_INSURANCE_URL ?? "";

// A8.net「猫用サプリ」シリーズの広告リンク・計測用ピクセル。
// 部位・目的ごとに分かれているシリーズ商品なので、表示先のツール/結果ごとに振り分けている。
// 猫の年齢計算機でシニア期/高齢期と判定された場合の「気になる部位から選ぶ」リスト用。
export const AFFILIATE_SENIOR_CAT_SUPPLEMENT_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_SENIOR_CAT_SUPPLEMENT_URL ?? ""; // 毎日一緒(DHA&EPA)
export const AFFILIATE_SENIOR_CAT_SUPPLEMENT_PIXEL =
  process.env.NEXT_PUBLIC_AFFILIATE_SENIOR_CAT_SUPPLEMENT_PIXEL ?? "";

export const AFFILIATE_LIVER_SUPPLEMENT_URL = process.env.NEXT_PUBLIC_AFFILIATE_LIVER_SUPPLEMENT_URL ?? ""; // 毎日良肝
export const AFFILIATE_LIVER_SUPPLEMENT_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_LIVER_SUPPLEMENT_PIXEL ?? "";

export const AFFILIATE_JOINT_SUPPLEMENT_URL = process.env.NEXT_PUBLIC_AFFILIATE_JOINT_SUPPLEMENT_URL ?? ""; // 毎日散歩
export const AFFILIATE_JOINT_SUPPLEMENT_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_JOINT_SUPPLEMENT_PIXEL ?? "";

export const AFFILIATE_EYE_SUPPLEMENT_URL = process.env.NEXT_PUBLIC_AFFILIATE_EYE_SUPPLEMENT_URL ?? ""; // 毎日愛眼
export const AFFILIATE_EYE_SUPPLEMENT_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_EYE_SUPPLEMENT_PIXEL ?? "";

export const AFFILIATE_HEART_SUPPLEMENT_URL = process.env.NEXT_PUBLIC_AFFILIATE_HEART_SUPPLEMENT_URL ?? ""; // 毎日健心
export const AFFILIATE_HEART_SUPPLEMENT_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_HEART_SUPPLEMENT_PIXEL ?? "";

// 体重管理ツール専用(毎日習慣: 体重・血糖値)
export const AFFILIATE_WEIGHT_SUPPLEMENT_URL = process.env.NEXT_PUBLIC_AFFILIATE_WEIGHT_SUPPLEMENT_URL ?? "";
export const AFFILIATE_WEIGHT_SUPPLEMENT_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_WEIGHT_SUPPLEMENT_PIXEL ?? "";

// ごはんの量計算ツール専用(毎日爽快: 腸内環境)
export const AFFILIATE_GUT_SUPPLEMENT_URL = process.env.NEXT_PUBLIC_AFFILIATE_GUT_SUPPLEMENT_URL ?? "";
export const AFFILIATE_GUT_SUPPLEMENT_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_GUT_SUPPLEMENT_PIXEL ?? "";

// 猫の年齢計算ページに常時表示(Catlog: 見守りデバイス。年齢を問わず関係するため)
export const AFFILIATE_CATLOG_URL = process.env.NEXT_PUBLIC_AFFILIATE_CATLOG_URL ?? "";
export const AFFILIATE_CATLOG_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_CATLOG_PIXEL ?? "";

// 犬の年齢計算ページで「体格」に応じて出し分ける専用フード
export const AFFILIATE_SMALL_DOG_FOOD_URL = process.env.NEXT_PUBLIC_AFFILIATE_SMALL_DOG_FOOD_URL ?? "";
export const AFFILIATE_SMALL_DOG_FOOD_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_SMALL_DOG_FOOD_PIXEL ?? "";
export const AFFILIATE_LARGE_DOG_FOOD_URL = process.env.NEXT_PUBLIC_AFFILIATE_LARGE_DOG_FOOD_URL ?? "";
export const AFFILIATE_LARGE_DOG_FOOD_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_LARGE_DOG_FOOD_PIXEL ?? "";

// ごはんの量計算ツールに追加(ネルソンズドッグフード)
export const AFFILIATE_NELSONS_DOG_FOOD_URL = process.env.NEXT_PUBLIC_AFFILIATE_NELSONS_DOG_FOOD_URL ?? "";
export const AFFILIATE_NELSONS_DOG_FOOD_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_NELSONS_DOG_FOOD_PIXEL ?? "";

// 犬の年齢計算機でシニア期/高齢期と判定された場合の「気になる部位から選ぶ」リスト用(猫と対称の構成)。
export const AFFILIATE_DOG_HEALTH_SUPPLEMENT_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_DOG_HEALTH_SUPPLEMENT_URL ?? ""; // 安心犬活(総合)
export const AFFILIATE_DOG_HEALTH_SUPPLEMENT_PIXEL =
  process.env.NEXT_PUBLIC_AFFILIATE_DOG_HEALTH_SUPPLEMENT_PIXEL ?? "";

export const AFFILIATE_DOG_EYE_SUPPLEMENT_URL = process.env.NEXT_PUBLIC_AFFILIATE_DOG_EYE_SUPPLEMENT_URL ?? ""; // 毎日愛眼(犬用)
export const AFFILIATE_DOG_EYE_SUPPLEMENT_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_DOG_EYE_SUPPLEMENT_PIXEL ?? "";

// シニア期/高齢期判定時の専用フード(モグワンドッグフード シニア用)
export const AFFILIATE_SENIOR_DOG_FOOD_URL = process.env.NEXT_PUBLIC_AFFILIATE_SENIOR_DOG_FOOD_URL ?? "";
export const AFFILIATE_SENIOR_DOG_FOOD_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_SENIOR_DOG_FOOD_PIXEL ?? "";

// 体重管理ツール専用・犬用(毎日習慣: 体重・血糖値。猫と対の商品)
export const AFFILIATE_DOG_WEIGHT_SUPPLEMENT_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_DOG_WEIGHT_SUPPLEMENT_URL ?? "";
export const AFFILIATE_DOG_WEIGHT_SUPPLEMENT_PIXEL =
  process.env.NEXT_PUBLIC_AFFILIATE_DOG_WEIGHT_SUPPLEMENT_PIXEL ?? "";

// 犬の年齢計算ページに常時表示(散歩用うんちキャッチャー)
export const AFFILIATE_DOG_WALK_ACCESSORY_URL = process.env.NEXT_PUBLIC_AFFILIATE_DOG_WALK_ACCESSORY_URL ?? "";
export const AFFILIATE_DOG_WALK_ACCESSORY_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_DOG_WALK_ACCESSORY_PIXEL ?? "";

// ごはんの量計算ツールに追加(カナガンデンタルキャットフード)
export const AFFILIATE_DENTAL_CAT_FOOD_URL = process.env.NEXT_PUBLIC_AFFILIATE_DENTAL_CAT_FOOD_URL ?? "";
export const AFFILIATE_DENTAL_CAT_FOOD_PIXEL = process.env.NEXT_PUBLIC_AFFILIATE_DENTAL_CAT_FOOD_PIXEL ?? "";
