import { cache } from "react"
import config from '@payload-config'
import { CollectionSlug, getPayload } from "payload"

export const queryBySlug = cache(async (params) => {
  const { slug = [''] } = await params
  const [module, slugName] = slug
  const query = { slug: module === 'post' ? slugName : module, collection: module === 'post' ? 'posts' : 'pages' }
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: query.collection as CollectionSlug,
    limit: 1,
    where: {
      slug: {
        equals: query.slug,
      },
    },
  })
  return result.docs?.[0] || null
})

export const getSiteConfig = cache(async () => {
  try {
    const payload = await getPayload({ config })
    const siteConfig = await payload.findGlobal({ slug: 'site' })
    return siteConfig
  } catch (err) {
    return null
  }
})

export const getAllPublicContents = cache(async () => {
  const payload = await getPayload({ config })
  const searchCollections: CollectionSlug[] = ['pages', 'posts']
  try {
    const [pages, posts] = await Promise.all(searchCollections.map(collection => (payload.find({
      collection,
      draft: false,
      limit: 1000,
    }))))

    if (!pages.docs) return []
    // @ts-ignore
    const pagesSlugs = pages.docs.map(({ slug, ...rest }) => ({ slug: slug === '' ? '/' : slug, ...rest }))
    if (!posts.docs) return pagesSlugs
    // @ts-ignore
    const postsSlugs = posts.docs ? posts.docs.map(({ slug, ...rest }) => ({ slug: 'post/' + slug, ...rest })) : []
    return [...pagesSlugs, ...postsSlugs]
  } catch (err) {
    return []
  }
})

export const getFooter = cache(async () => {
  try {
    const payload = await getPayload({ config })
    return await payload.findGlobal({ slug: 'footer' })
  } catch (err) {
    return null
  }
})