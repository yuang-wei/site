import { CollectionConfig } from "payload";
import { getContentFiledWithMarkdown } from "../fields/content";
import { getSlugField } from "../fields/slug";

export const Notes: CollectionConfig = {
  slug: "notes",
  admin: {
    defaultColumns: ["title", "type", "createdAt"],
    useAsTitle: "title",
    hideAPIURL: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        readOnly: true,
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          async ({ siblingData }) => {
            if (siblingData.content) {
              return siblingData.content.root.children[0].children[0].text;
            }
            return null;
          },
        ],
      },
    },
    ...getSlugField(),
    {
      name: "tags",
      type: "relationship",
      admin: {
        position: "sidebar",
      },
      hasMany: true,
      relationTo: "tags",
    },
    {
      name: "source",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "type",
      type: "radio",
      options: [
        {
          label: "Fleeting note",
          value: "fleeting",
        },
        {
          label: "Evergreen note",
          value: "evergreen",
        },
      ],
      defaultValue: "fleeting",
      admin: {
        layout: "horizontal",
        position: "sidebar",
      },
    },
    ...getContentFiledWithMarkdown({ localized: false }),
  ],
};
