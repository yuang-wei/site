import { CollectionConfig } from "payload";
import { getContentFiledWithMarkdown } from "../fields/content";

export const Notes: CollectionConfig = {
  slug: 'notes',
  admin: {
    defaultColumns: ['title', 'createdAt'],
    useAsTitle: 'title',
    hideAPIURL: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          async ({ siblingData }) => {
            if (siblingData.content) {
              return siblingData.content.root.children[0].children[0].text
            };
            return null;
          }
        ]
      }
    },
    ...getContentFiledWithMarkdown({ localized: false })
  ]
}