import { MetadataRoute } from "next";
import { getAllPublicContents, getSiteConfig } from "./(site)/lib/payload";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const content = await getAllPublicContents()
  const config = await getSiteConfig()
  if (!config) {
    return null
  }
  const map = content.map(item => ({
    url: `${config.baseUrl}/${item['slug']}`,
    lastModified: item['updatedAt']
  }))
  return map
}
