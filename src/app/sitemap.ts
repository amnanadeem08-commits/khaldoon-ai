import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://khaldoonai.com";
  const paths = [
    "",
    "/products",
    "/products/excel-mvp",
    "/products/databot",
    "/products/khaldoon-trade",
    "/services",
    "/pricing",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path.startsWith("/products") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("excel") ? 0.9 : 0.7,
  }));
}
