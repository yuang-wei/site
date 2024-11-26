import { GlobalConfig } from "payload";
import { getLink } from "../fields/link";

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'footerLinks',
      type: 'array',
      localized: true,
      fields: [
        getLink({
          appearances: false,
        }),
      ],
      maxRows: 6,
    },
  ],
}