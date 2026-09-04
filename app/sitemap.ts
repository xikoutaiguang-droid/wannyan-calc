import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/tools",
    "/tools/cat-age",
    "/tools/dog-age",
    "/tools/feeding-calculator",
    "/tools/neuter-timing",
    "/tools/weight-management",
    "/about",
    "/privacy",
  ];

  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/tools/") ? 0.8 : 0.5,
  }));
}
