import { Field } from "payload"
import lexicalEditor from '@/app/(payload)/lib/lexical'
// import { lexicalToMarkdown } from "../lib/markdown"

export const getContentFiledWithMarkdown = ({ localized = false }): Field[] => {
  return [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor,
      label: false,
      localized,
      required: false,
    },
  ]
}
