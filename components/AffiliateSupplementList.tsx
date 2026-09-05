interface SupplementItem {
  concern: string;
  label: string;
  url: string;
  pixelUrl?: string;
}

// 同じシリーズの複数商品を、部位別に選べるコンパクトなPRリストとして表示する。
// 1件ずつ大きなバナーを並べると圧迫感が出るため、リスト形式にまとめている。
export default function AffiliateSupplementList({ items, heading }: { items: SupplementItem[]; heading: string }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-6 rounded-2xl border border-accent/30 bg-accent-soft/40 p-4">
      <div className="mb-2 flex items-center gap-2">
        <p className="text-[11px] font-semibold tracking-wide text-muted">PR</p>
        <p className="text-xs font-medium text-foreground/80">{heading}</p>
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.concern}>
            <a
              href={item.url}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="flex items-baseline gap-2 text-sm hover:underline"
            >
              <span className="shrink-0 rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent-strong">
                {item.concern}
              </span>
              <span className="text-accent-strong">{item.label} →</span>
            </a>
            {item.pixelUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.pixelUrl} width={1} height={1} alt="" className="absolute h-px w-px opacity-0" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
