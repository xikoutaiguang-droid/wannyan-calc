import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface PlaceResult {
  id: string;
  displayName?: { text?: string };
  formattedAddress?: string;
  location?: { latitude: number; longitude: number };
  googleMapsUri?: string;
  nationalPhoneNumber?: string;
  currentOpeningHours?: { openNow?: boolean };
}

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "サーバー側でGoogle Places APIキーが未設定です。" }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  const lat = Number(body?.lat);
  const lng = Number(body?.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return NextResponse.json({ error: "現在地の情報が正しくありません。" }, { status: 400 });
  }

  const res = await fetch("https://places.googleapis.com/v1/places:searchNearby", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.formattedAddress,places.location,places.googleMapsUri,places.nationalPhoneNumber,places.currentOpeningHours.openNow",
    },
    body: JSON.stringify({
      includedTypes: ["veterinary_care"],
      languageCode: "ja",
      locationRestriction: {
        circle: { center: { latitude: lat, longitude: lng }, radius: 15000 },
      },
      rankPreference: "DISTANCE",
      maxResultCount: 20,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "検索中にエラーが発生しました。" }, { status: 502 });
  }

  const json = (await res.json()) as { places?: PlaceResult[] };
  const places = json.places ?? [];

  const results = places
    .filter((p) => p.location)
    .map((p) => ({
      id: p.id,
      name: p.displayName?.text ?? "動物病院",
      address: p.formattedAddress ?? "",
      phone: p.nationalPhoneNumber ?? null,
      distanceKm: Math.round(haversineKm(lat, lng, p.location!.latitude, p.location!.longitude) * 10) / 10,
      openNow: p.currentOpeningHours?.openNow ?? null,
      mapsUrl: p.googleMapsUri ?? null,
    }))
    .sort((a, b) => {
      if (a.openNow !== b.openNow) {
        if (a.openNow === true) return -1;
        if (b.openNow === true) return 1;
      }
      return a.distanceKm - b.distanceKm;
    });

  return NextResponse.json({ results });
}
