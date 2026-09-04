"use client";

import { useState } from "react";

interface VetResult {
  id: string;
  name: string;
  address: string;
  phone: string | null;
  distanceKm: number;
  openNow: boolean | null;
  mapsUrl: string | null;
}

type Status = "idle" | "locating" | "loading" | "done" | "error";

export default function NearbyVetFinder() {
  const [status, setStatus] = useState<Status>("idle");
  const [results, setResults] = useState<VetResult[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = () => {
    if (!("geolocation" in navigator)) {
      setStatus("error");
      setErrorMessage("お使いのブラウザは現在地の取得に対応していません。");
      return;
    }

    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setStatus("loading");
        try {
          const res = await fetch("/api/nearby-vet", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }),
          });
          if (!res.ok) throw new Error();
          const json = await res.json();
          setResults(json.results ?? []);
          setStatus("done");
        } catch {
          setStatus("error");
          setErrorMessage("検索中にエラーが発生しました。時間をおいて再度お試しください。");
        }
      },
      () => {
        setStatus("error");
        setErrorMessage("現在地を取得できませんでした。ブラウザの位置情報の許可設定をご確認ください。");
      }
    );
  };

  return (
    <div>
      <div className="mb-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm leading-relaxed text-red-900 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
        <p className="mb-1 font-semibold">緊急時は、必ず来院前に電話で確認してください</p>
        <p>
          表示される営業時間・診療可否はGoogleマップ上の情報をもとにしており、当サイトが内容を保証・更新しているものではありません。
          実際に診療できるかは病院によって異なるため、向かう前に必ずお電話で確認してください。
        </p>
      </div>

      <button
        onClick={handleSearch}
        disabled={status === "locating" || status === "loading"}
        className="w-full rounded-xl bg-accent px-4 py-3 text-center font-medium text-accent-foreground transition active:scale-[0.98] disabled:opacity-60"
      >
        {status === "locating"
          ? "現在地を取得中…"
          : status === "loading"
            ? "近くの動物病院を検索中…"
            : "現在地から探す"}
      </button>
      <p className="mt-2 text-xs text-muted">
        ボタンを押すとブラウザが位置情報の利用許可を求めます。取得した位置情報はこの検索のためだけに使い、保存はしません。
      </p>

      {status === "error" && <p className="mt-4 text-sm text-red-600 dark:text-red-400">{errorMessage}</p>}

      {status === "done" && (
        <div className="mt-6">
          {results.length === 0 ? (
            <p className="text-sm text-muted">半径15km以内に動物病院が見つかりませんでした。</p>
          ) : (
            <ul className="flex flex-col gap-2.5">
              {results.map((r) => (
                <li key={r.id} className="rounded-xl border border-border bg-surface p-3.5 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{r.name}</p>
                      <p className="mt-0.5 truncate text-xs text-muted">{r.address}</p>
                      {r.phone && <p className="mt-0.5 text-xs text-muted">{r.phone}</p>}
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span className="text-sm font-semibold text-accent-strong">{r.distanceKm}km</span>
                      {r.openNow === true && (
                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-medium text-green-700 dark:bg-green-900/40 dark:text-green-300">
                          営業中
                        </span>
                      )}
                      {r.openNow === false && (
                        <span className="rounded-full bg-border px-2 py-0.5 text-[11px] font-medium text-muted">
                          営業時間外
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-2.5 flex gap-4">
                    {r.phone && (
                      <a href={`tel:${r.phone}`} className="text-sm font-medium text-accent-strong hover:underline">
                        電話する →
                      </a>
                    )}
                    {r.mapsUrl && (
                      <a
                        href={r.mapsUrl}
                        target="_blank"
                        rel="noopener"
                        className="text-sm font-medium text-accent-strong hover:underline"
                      >
                        Googleマップで開く →
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
