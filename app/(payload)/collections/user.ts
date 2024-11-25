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
    // {
    //   name: 'user-role',
    //   type: 'radio',
    //   options: [
    //     {
    //       label: 'Admin',
    //       value: 'admin',
    //     },
    //     {
    //       label: 'Reader',
    //       value: 'reader',
    //     },
    //     {
    //       label: 'Visitor',
    //       value: 'visitor',
    //     },
    //   ],
    //   defaultValue: 'mint',
    //   admin: {
    //     layout: 'horizontal',
    //   },
    // },
  ],
  timestamps: true,
}
