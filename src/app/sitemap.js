import { collections } from "./data/collections";
import { bathSets } from "./data/bathSets";
import { showers } from "./data/showers";

// regenerate sitemap once every 24 hours
export const revalidate = 86400;

const BASE_URL = "https://www.cpbathfittingmanufacturer.com"; // apni actual domain daal dena

export default function sitemap() {
  const currentDate = new Date();

  // static routes
  const staticRoutes = [
    { url: `${BASE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/collections`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/bath-set`, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/shower`, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/become-a-dealer`, changeFrequency: "weekly", priority: 0.6 },
  ].map((route) => ({
    ...route,
    lastModified: currentDate,
  }));

  // dynamic collection routes (quba, aria, opal, ...)
  const collectionRoutes = collections.map((item) => ({
    url: `${BASE_URL}/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  // dynamic bath-set sub-routes (dolfee, squaro, ridim)
  const bathSetRoutes = bathSets.map((item) => ({
    url: `${BASE_URL}/bath-set/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.6,
  }));

  // dynamic shower sub-routes (rain, overhead, hand-shower)
  const showerRoutes = showers.map((item) => ({
    url: `${BASE_URL}/shower/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...collectionRoutes,
    ...bathSetRoutes,
    ...showerRoutes,
  ];
}