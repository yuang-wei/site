import { Field } from "payload";
import lexicalEditor from "./lexical";

export const EditorCollectionFields: Field[] = [
  {
    name: 'content',
    type: 'richText',
    editor: lexicalEditor,
    label: false,
    required: true,
  },
  {
    name: 'markdown-content',
    type: 'text',
    admin: {
      hidden: true,
    },
  }
]