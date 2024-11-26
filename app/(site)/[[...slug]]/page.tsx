import { notFound } from "next/navigation"
import { queryBySlug } from "../lib/payload"
import Renderer from "../components/content"
import Footer from "../components/layouts/footer"

// export async function generateStaticParams() {
//   const content = await getAllPublicContents()
//   const slugs = content.map(({ slug }) => ({ slug: slug.split('/') }))
//   return slugs
// }

export async function generateMetadata({ params }) {
  const res = await queryBySlug(params)
  if (!res || res['slug'] === '') {
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
      <Renderer node={res['content']['root']} />
      <Footer />
    </section>
  )
}

