// 景品表示法のステマ規制対応で、必ず「PR」表記を出す。
// A8.netのリンクはrel="nofollow"必須。加えてGoogleのガイドラインに沿ってsponsoredも付与。
export default function AffiliateBanner({
  url,
  pixelUrl,
  label,
}: {
  url: string;
  pixelUrl?: string;
  label: string;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-accent/30 bg-accent-soft/40 p-4">
      <p className="mb-2 text-[11px] font-semibold tracking-wide text-muted">PR</p>
      <a
        href={url}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="text-sm font-medium text-accent-strong hover:underline"
      >
        {label} →
      </a>
      {pixelUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={pixelUrl} width={1} height={1} alt="" className="absolute h-px w-px opacity-0" />
      )}
    </div>
  );
}
