import { GlobalConfig } from "payload";

export const Site: GlobalConfig = {
  slug: 'site',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
    },
    {
      name: 'siteDescription',
      type: 'text',
    },
    {
      name: 'baseUrl',
      type: 'text'
    }
  ],
}