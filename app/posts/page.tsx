import Link from "next/link";
import { formatDate, getBlogPosts, groupPostsByYear } from "app/lib/posts";

export const metadata = {
  title: "Posts",
};

export default function BlogPosts() {
  const allBlogs = getBlogPosts(),
    groupBlogsByYear = groupPostsByYear(allBlogs),
    years = Object.keys(groupBlogsByYear)
  return (
    <section>
      <div>
        {years
          .sort((a, b) => Number(a) - Number(b))
          .map(year => (
            <div key={year}>
              <h2 className="font-medium text-xl my-5">{year}</h2>
              <section>
                {groupBlogsByYear[year].sort((a, b) => {
                  if (
                    new Date(a.metadata.publishedAt) >
                    new Date(b.metadata.publishedAt)
                  ) {
                    return -1;
                  }
                  return 1;
                })
                  .map((post) => (
                    <Link
                      key={post.slug}
                      className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
                      href={`/posts/${post.slug}`}
                    >
                      <div className="w-full flex space-x-5 items-center">
                        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                          {formatDate(post.metadata.publishedAt, false)}
                        </p>
                        <p className="text-black dark:text-white tracking-tight text-base">
                          {post.metadata.title}
                        </p>

                      </div>
                    </Link>
                  ))}

              </section>
            </div>
          ))}
      </div>
    </section>
  );
}
