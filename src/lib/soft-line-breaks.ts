import type {
  Delete,
  Emphasis,
  Heading,
  Link,
  Paragraph,
  Strong,
  TableCell,
  Text,
  Break,
} from "mdast"
import { defineMdastPlugin } from "satteri"

type PhrasingContainer =
  | Paragraph
  | Heading
  | TableCell
  | Link
  | Emphasis
  | Strong
  | Delete

const visitPhrasingContainer = (
  node: PhrasingContainer,
  ctx: ReturnType<typeof defineMdastPlugin> extends never ? never : any,
) => {
  if (!Array.isArray(node.children)) return

  let changed = false
  const next = []

  for (const child of node.children) {
    if (child.type === "text" && child.value.includes("\n")) {
      changed = true

      const lines = child.value.split("\n")

      lines.forEach((line, index) => {
        if (line.length > 0) {
          next.push({
            type: "text",
            value: line,
          } satisfies Text)
        }

        if (index < lines.length - 1) {
          next.push({
            type: "break",
          } satisfies Break)
        }
      })
    } else {
      next.push(child)
    }
  }

  if (changed) {
    ctx.setProperty(node, "children", next)
  }
}

export const softLineBreaks = defineMdastPlugin({
  name: "soft-line-breaks",

  paragraph: visitPhrasingContainer,
  heading: visitPhrasingContainer,
  tableCell: visitPhrasingContainer,
  link: visitPhrasingContainer,
  emphasis: visitPhrasingContainer,
  strong: visitPhrasingContainer,
  delete: visitPhrasingContainer,
})