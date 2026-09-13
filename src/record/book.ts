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
{
  date: new Date("2026/09/12"),
  title: "『ノンデザイナーズ・デザインブック［第４版］』＋『ノンデザイナーでも役立つ図解の基本』セット",
  category: "book",
  creator: "ロビン・ウィリアムズ",
  releaseDate: "1998",
  country: "US",
},  
{
  date: new Date("2026/08/16"),
  title: "年代記 下 ティベリウス帝からネロ帝へ",
  category: "book",
  creator: "タキトゥス",
  releaseDate: "117",
  country: "RM",
},  
{
  date: new Date("2026/07/23"),
  title: "老神介護",
  category: "book",
  creator: "劉慈欣",
  releaseDate: "2022",
  country: "CN",
},
{
  date: new Date("2026/07/09"),
  title: "戦争×書物",
  category: "book",
  creator: "アンドルー・ペディグリー",
  releaseDate: "2026",
  country: "GB",
},{
  date: new Date("2026/06/21"),
  title: "年代記 上 ティベリウス帝からネロ帝へ",
  category: "book",
  creator: "タキトゥス",
  releaseDate: "117",
  country: "RM",
},{
  date: new Date("2026/05/17"),
  title: "作家はどうやって小説を書くのか、たっぷり聞いてみよう! : パリ・レヴュー・インタヴュー II",
  category: "book",
  creator: "パリ・レヴュー・インタヴュー",
  releaseDate: "2015",
  country: "US",
  favorite: true,
},
{
  date: new Date("2026/05/20"),
  title: "カート・ヴォネガット全短篇 1 バターより銃",
  category: "book",
  creator: "カート・ヴォネガット",
  releaseDate: "2018",
  country: "US",
},{
  date: new Date("2026/05/17"),
  title: "純真なエレンディラと邪悪な祖母の信じがたくも痛ましい物語 : ガルシア=マルケス中短篇傑作選",
  category: "book",
  creator: "ガブリエル・ガルシア＝マルケス",
  releaseDate: "1978",
  country: "CO",
  favorite: true,
},{
  date: new Date("2026/05/03"),
  title: "新版 川がつくった川、人がつくった川 わたしたちにとって川とは何か",
  category: "book",
  creator: "大熊孝",
  releaseDate: "2026",
  country: "JP",
},{
  date: new Date("2026/04/29"),
  title: "人類の星の時間",
  category: "book",
  creator: "シュテファン・ツヴァイク",
  releaseDate: "1927",
  country: "AT",
  favorite: true,
},{
  date: new Date("2026/02/28"),
  title: "エピクテトス 人生談義(下)",
  category: "book",
  creator: "エピクテトス、國方栄二",
  releaseDate: "2021",
  country: "GR",
},
{
  date: new Date("2026/01/16"),
  title: "エピクテトス 人生談義(上)",
  category: "book",
  creator: "エピクテトス、國方栄二",
  releaseDate: "2020",
  country: "GR",
  favorite: true,
},{
  date: new Date("2026/01/06"),
  title: "無駄なマシーンを発明しよう！〜独創性を育むはじめてのエンジニアリング〜",
  category: "book",
  creator: "藤原麻里菜",
  releaseDate: "2021",
  country: "JP",
},{
  date: new Date("2026/01/06"),
  title: "電子工作パーフェクトガイド：工作テクニックと電子部品・回路・マイコンボードの知識が身につく",
  category: "book",
  creator: "伊藤尚未",
  releaseDate: "2018",
  country: "JP",
},
{
  date: new Date("2026/01/06"),
  title: "わかる！電子工作の基本100",
  category: "book",
  creator: "遠藤敏夫",
  releaseDate: "2010",
  country: "JP",
},{
  date: new Date("2025/11/30"),
  title: "アメリカへようこそ",
  category: "book",
  creator: "マシュー・ベイカー",
  releaseDate: "2023",
  country: "US",
},
{
  date: new Date("2025/11/04"),
  title: "哲人たちの人生談義 ストア哲学をよむ",
  category: "book",
  creator: "國方栄二",
  releaseDate: "2022",
  country: "JP",
},
{
  date: new Date("2025/08/10"),
  title: "転がる香港に苔は生えない",
  category: "book",
  creator: "星野博美",
  releaseDate: "2000",
  country: "JP",
},{
  date: new Date("2025/10/19"),
  title: "CODE コードから見たコンピュータのからくり 第2版",
  category: "book",
  creator: "チャールズ・ペゾルド",
  releaseDate: "2024",
  country: "US",
},
{
  date: new Date("2025/09/26"),
  title: "月の光 現代中国SFアンソロジー",
  category: "book",
  creator: "ケン・リュウ",
  releaseDate: "2020",
  country: "CN",
},
{
  date: new Date("2025/06/04"),
  title: "眼中の人",
  category: "book",
  creator: "小島政二郎",
  releaseDate: "1942",
  country: "JP",
  favorite: true,
},{
  date: new Date("2025/06/20"),
  title: "老人と海",
  category: "book",
  creator: "アーネスト・ヘミングウェイ",
  releaseDate: "1952",
  country: "US",
},{
  date: new Date("2025/06/20"),
  title: "心朗らかなれ、誰もみな",
  category: "book",
  creator: "アーネスト・ヘミングウェイ、柴田元幸編",
  releaseDate: "2012",
  country: "US",
},{
  date: new Date("2025/06/20"),
  title: "海流のなかの島々",
  category: "book",
  creator: "アーネスト・ヘミングウェイ",
  releaseDate: "1970",
  country: "US",
},
{
  date: new Date("2025/06/26"),
  title: "名短篇",
  category: "book",
  creator: "新潮編集部",
  releaseDate: "2005",
  country: "JP",
},{
  date: new Date("2025/05/04"),
  title: "大江健三郎 江藤淳 全対話",
  category: "book",
  creator: "大江健三郎、江藤淳",
  releaseDate: "2024",
  country: "JP",
},
{
  date: new Date("2025/04/18"),
  title: "暇と退屈の倫理学",
  category: "book",
  creator: "國分功一郎",
  releaseDate: "2011",
  country: "JP",
},
{
  date: new Date("2025/04/17"),
  title: "同志少女よ、敵を撃て",
  category: "book",
  creator: "逢坂冬馬",
  releaseDate: "2021",
  country: "JP",
},
{
  date: new Date("2025/01/29"),
  title: "サルと哲学者 哲学について進化学はどう答えるか",
  category: "book",
  creator: "ファルシッド・ジャラルヴァンド",
  releaseDate: "2023",
  country: "SE",
},{
  date: new Date("2025/01/12"),
  title: "J・J・J三姉弟の世にも平凡な超能力",
  category: "book",
  creator: "チョン・セラン",
  releaseDate: "2024",
  country: "KR",
},
{
  date: new Date("2024/10/18"),
  title: "親密な異邦人",
  category: "book",
  creator: "チョン・ハナ",
  releaseDate: "2024",
  country: "KR",
},
{
  date: new Date("2024/08/31"),
  title: "大都会の愛し方",
  category: "book",
  creator: "パク・サンヨン",
  releaseDate: "2020",
  country: "KR",
  favorite: true,
},{
  date: new Date("2024/08/16"),
  title: "息吹",
  category: "book",
  creator: "テッド・チャン",
  releaseDate: "2019",
  country: "US",
  favorite: true,
},
{
  date: new Date("2024/01/19"),
  title: "首",
  category: "book",
  creator: "北野武",
  releaseDate: "2019",
  country: "JP",
},
{
  date: new Date("2023/08/02"),
  title: "独裁者の料理人 厨房から覗いた政権の舞台裏と食卓",
  category: "book",
  creator: "ヴィトルト・シャブウォフスキ",
  releaseDate: "2023",
  country: "PL",
  favorite: true,
},{
  date: new Date("2023/06/17"),
  title: "亡霊の地",
  category: "book",
  creator: "陳思宏",
  releaseDate: "2023",
  country: "TW",
  favorite: true,
},
{
  date: new Date("2023/06/17"),
  title: "川と人類の文明史",
  category: "book",
  creator: "ローレンス・C・スミス",
  releaseDate: "2023",
  country: "US",
},
{
  date: new Date("2023/05/20"),
  title: "文章読本",
  category: "book",
  creator: "丸谷才一",
  releaseDate: "1977",
  country: "JP",
  favorite: true,
},
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
