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
      required: true,
    },
    // {
    //   name: 'markdown-content',
    //   type: 'text',
    //   localized,
    //   admin: {
    //     readOnly: true,
    //     hidden: true,
    //   },
    //   hooks: {
    //     beforeValidate: [
    //       async ({ siblingData }) => {
    //         if (siblingData.content) return lexicalToMarkdown(siblingData.content);
    //         return null;
    //       }
    //     ]
    //   }
    // }
  ]
}
