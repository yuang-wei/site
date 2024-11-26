import { CollectionConfig } from "payload";
import { adminPreview } from "@/app/(payload)/lib/preview";
import { getContentFiledWithMarkdown } from "../fields/content";
import { getSlugField } from "../fields/slug";


export const Posts: CollectionConfig = {
  slug: 'posts',
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