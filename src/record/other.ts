export type RecordCategory = "book" | "movie" | "game" | "other"

export type RecordEntry = {
  date?: string | Date
  title: string
  category?: RecordCategory
  url?: string
  creator?: string
  releaseDate?: string
  country?: string | string[]
  notes?: string
  favorite?: true
}

export type ResolvedRecordEntry = {
  date?: Date
  title: string
  category: RecordCategory
  url: string
  creator: string
  releaseDate: string
  country: string[]
  notes: string
  favorite: boolean
}

const recordEntries: RecordEntry[] = [


]

function parseRecordDate(value?: string | Date) {
  if (value instanceof Date) return value
  if (typeof value !== "string" || !value.trim()) return undefined

  const normalized = value.trim().replaceAll("/", "-")
  const date = new Date(`${normalized}T00:00:00`)
  return Number.isNaN(date.getTime()) ? undefined : date
}

function resolveRecordEntry(entry: RecordEntry): ResolvedRecordEntry {
  return {
    date: parseRecordDate(entry.date),
    title: entry.title,
    category: entry.category ?? "other",
    url: entry.url ?? "",
    creator: entry.creator ?? "",
    releaseDate: entry.releaseDate ?? "",
    country: Array.isArray(entry.country)
      ? entry.country
      : entry.country
        ? [entry.country]
        : [],
    notes: entry.notes ?? "",
    favorite: entry.favorite === true,
  }
}

const compareRecordDates = (left?: Date, right?: Date) => {
  if (!left && !right) return 0
  if (!left) return 1
  if (!right) return -1

  return right.getTime() - left.getTime()
}

export function getRecordEntries() {
  return [...recordEntries]
    .map(resolveRecordEntry)
    .sort((a, b) => compareRecordDates(a.date, b.date))
}