import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'

export const Tags: CollectionConfig = {
  slug: 'tags',
  access: {
    read: anyone,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'parent',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'tags',
    },
  ],
}