import { CollectionConfig } from "payload"
import { anyone } from "../access/anyone"

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: anyone,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    }
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    disableLocalStorage: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
      },
    ],
  },
}