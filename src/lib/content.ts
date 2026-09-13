import { SITE } from "@/consts"
import { getCollection, type CollectionEntry } from "astro:content"
import { isSubpost } from "@/lib/utils"

type CollectionKey = "blog" | "novel"

export const pageTitle = (title: string) => `${title} | ${SITE.title}`

export async function getPosts<
  C extends CollectionKey = "blog",
>(collection: C = "blog" as C): Promise<CollectionEntry<C>[]> {
  const posts = await getCollection(collection, ({ data }) => !data.draft)
  return posts
    .filter((post) => !isSubpost(post.id))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

export async function getSubposts<
  C extends CollectionKey = "blog",
>(collection: C = "blog" as C): Promise<Map<string, CollectionEntry<C>[]>> {
  const posts = await getCollection(
    collection,
    ({ id, data }) => !data.draft && id.split("/").length === 2,
  )
  posts.sort(
    (a, b) =>
      (a.data.order ?? Infinity) - (b.data.order ?? Infinity) ||
      a.data.date.getTime() - b.data.date.getTime(),
  )
  return Map.groupBy(posts, (post) => post.id.split("/")[0])
}

export async function getTags<
  C extends CollectionKey = "blog",
>(collection: C = "blog" as C): Promise<Map<string, CollectionEntry<C>[]>> {
  const posts = await getPosts(collection)
  const series = await getSubposts(collection)
  const tags = new Map<string, CollectionEntry<C>[]>()
  for (const post of posts) {
    const chain = [post, ...(series.get(post.id) ?? [])]
    for (const tag of new Set(chain.flatMap((entry) => entry.data.tags ?? []))) {
      const tagged = tags.get(tag)
      if (tagged) tagged.push(post)
      else tags.set(tag, [post])
    }
  }
  return new Map(
    [...tags].sort(
      ([a, postsA], [b, postsB]) =>
        postsB.length - postsA.length || a.localeCompare(b),
    ),
  )
}
