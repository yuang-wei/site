import { CollectionConfig } from "payload";
import dayjs from 'dayjs';
import { getContentFiledWithMarkdown } from "../fields/content";
import { getSlugField } from "../fields/slug";

export const Journals: CollectionConfig = {
  slug: 'journals',
  admin: {
    defaultColumns: ['title', 'createdAt'],
    useAsTitle: 'title',
    hideAPIURL: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      admin: {
        position: 'sidebar'
      },
      hooks: {
        beforeValidate: [
          async ({ data, value }) => {
            if (!data.title) {
              return dayjs().format('YYYY-MM-DD')
            };
            return value
          }
        ]
      }
    },
    ...getSlugField(),
    ...getContentFiledWithMarkdown({ localized: false }),
    {
      name: 'Memos',
      type: 'array',
      fields: [
        {
          name: 'memo',
          type: 'upload',
          relationTo: 'media',
        }
      ],
    }
  ]
}