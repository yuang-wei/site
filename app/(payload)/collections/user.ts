import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'radio',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Visitor',
          value: 'visitor',
        },
      ],
      defaultValue: 'admin',
      admin: {
        layout: 'horizontal',
      },
    },
  ],
  timestamps: true,
}
