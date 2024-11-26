import { CollectionConfig } from "payload";
import { adminPreview } from "../lib/preview";
import { getContentFiledWithMarkdown } from "../fields/content";
import { getSlugField } from "../fields/slug";

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
    ...adminPreview,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    ...getSlugField(),
    ...getContentFiledWithMarkdown({ localized: true })
  ]
}