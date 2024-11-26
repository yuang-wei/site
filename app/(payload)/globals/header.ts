import { GlobalConfig } from "payload";
import { getLink } from "../fields/link";

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
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
  hooks: {
    // afterChange: [revalidateHeader],
  },
}