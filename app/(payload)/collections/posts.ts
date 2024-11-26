import { CollectionConfig } from "payload";
import { getAdminPreview } from "@/app/(payload)/lib/preview";
import { getContentFiledWithMarkdown } from "../fields/content";
import { getSlugField } from "../fields/slug";


export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
    ...getAdminPreview('posts'),
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