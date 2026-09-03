import type { MetadataRoute } from "next";
import { cars } from "@/data/cars";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/san-pham", "/ve-chung-toi", "/tin-tuc"];
  return [
    ...pages.map((path, index) => ({ url: siteConfig.url + path, changeFrequency: "weekly" as const, priority: index === 0 ? 1 : 0.8 })),
    ...cars.map((car) => ({ url: siteConfig.url + "/san-pham/" + car.slug, changeFrequency: "weekly" as const, priority: 0.7 })),
  ];
}
