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
    {
      name: 'tags',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'tags',
    },
    {
      name: 'source',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'evergreen',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
      },
    },
    ...getContentFiledWithMarkdown({ localized: false })
  ]
}