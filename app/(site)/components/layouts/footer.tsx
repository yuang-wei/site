import Link from "next/link";
import { getFooter, getSiteConfig } from "../../lib/payload";
const YEAR = new Date().getFullYear();

export default async function Footer() {
  const footerConfig = await getFooter()
  const siteConfig = await getSiteConfig()
  if (!siteConfig) return null
  return (
    <small className="flex items-center justify-between lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4] ">
      <span className="no-underline flex gap-2 items-center">
        <a
          href={siteConfig.baseUrl}
          rel="noopener noreferrer"
        >
          <time>© {YEAR}</time>{" "}
          {siteConfig.siteName}
        </a>
      </span>

      <ul className="flex gap-2">
        {footerConfig?.footerLinks.map(item => <li key={item.id}><Link href={item.link.url} target={item.link.newTab ? '_blank' : '_self'}>{item.link.label}</Link></li>)}
      </ul>
    </small>
  );
}
