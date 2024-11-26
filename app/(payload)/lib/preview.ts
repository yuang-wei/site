import { CollectionSlug } from 'payload'
import { getServerSideURL } from './urls'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/posts',
  pages: '',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
}

export const generatePreviewPath = ({ collection, slug }: Props) => {
  const path = `${collectionPrefixMap[collection]}/${slug}`

  const params = {
    slug,
    collection,
    path,
  }

  const encodedParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value)
  })

  return `/next/preview?${encodedParams.toString()}`
}

export const adminPreview = {
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
}