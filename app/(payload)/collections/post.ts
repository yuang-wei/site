import { CollectionConfig } from "payload";
import { generatePreviewPath } from "@/app/(payload)/lib/preview";
import { getServerSideURL } from "@/app/(payload)/lib/urls";
import { EditorCollectionFields } from "@/app/(payload)/components/editors/config";



export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'posts',
        })

        return `${getServerSideURL()}${path}`
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'posts',
      })

      return `${getServerSideURL()}${path}`
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    ...EditorCollectionFields
    // {
    //   type: 'tabs',
    //   tabs: [
    //     {
    //       fields: [
    //         {
    //           name: 'relatedPosts',
    //           type: 'relationship',
    //           admin: {
    //             position: 'sidebar',
    //           },
    //           filterOptions: ({ id }) => {
    //             return {
    //               id: {
    //                 not_in: [id],
    //               },
    //             }
    //           },
    //           hasMany: true,
    //           relationTo: 'posts',
    //         },
    //         {
    //           name: 'tags',
    //           type: 'relationship',
    //           admin: {
    //             position: 'sidebar',
    //           },
    //           hasMany: true,
    //           relationTo: 'tags',
    //         },
    //       ],
    //       label: 'Meta',
    //     },
    //   ]
    // }
  ]
}