import type { SvgComponent } from "astro/types"
import RSS from "@/assets/icons/rss.svg"

export const SITE = {
  title: "sample",
  description: "記録場",
  locale: "ja-JP",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const

export const NAVIGATION = [
  { href: "/", label: "HOME" },
  { href: "", label: "INFO" },
  { href: "/blog", label: "BLOG" },
  { href: "", label: "REVIEW" },
  { href: "/record", label: "RECORD" }
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
]