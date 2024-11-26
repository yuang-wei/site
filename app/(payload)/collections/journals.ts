import { CollectionConfig } from "payload";
import dayjs from 'dayjs';
import { getContentFiledWithMarkdown } from "../fields/content";

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
    ...getContentFiledWithMarkdown({ localized: false }),
  ]
}