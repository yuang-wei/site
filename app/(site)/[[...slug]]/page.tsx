import { notFound } from "next/navigation"
import { getAllPublicContents, queryBySlug } from "../lib/payload"

export async function generateStaticParams() {
  const content = await getAllPublicContents()
  const slugs = content.map(({ slug }) => ({ slug: slug.split('/') }))
  return slugs
}

export async function generateMetadata({ params }) {
  const res = await queryBySlug(params)
  if (!res) {
    return {}
  }
  return {
    title: res['title'],
  }
}

export default async function Page({ params }) {
  const res = await queryBySlug(params)
  if (!res) {
    notFound()
  }
  return (
    <section>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        {JSON.stringify(res['content'])}
      </article>
    </section>
  )
}

