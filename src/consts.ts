import type { SvgComponent } from "astro/types"
import RSS from "@/assets/icons/rss.svg"

export const SITE = {
  title: "min-width",
  description: "記録場",
  locale: "ja-JP",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const

export const NAVIGATION = [
  { href: "/", label: "HOME" },
  { href: "/info", label: "INFO" },
  { href: "/novel", label: "NOVEL" },
  { href: "/blog", label: "BLOG" },
  { href: "/record", label: "RECORD" },
  { href: "https://min-width.lsv.jp/tega", label: "TEGALOG" }
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
]