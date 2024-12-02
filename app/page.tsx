import Link from "next/link";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Yuang Wei
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Most of the time, I work as a Software Engineer and Tech Lead at an E-commerce SaaS company. I am passionate about building useful products at the intersection of software engineering, user experience, and business.
        </p>
        <p>
          In my spare time, I explore knowledge in the fields of AI, marketing, investment and product design. I've worked on some side projects and documented my learning notes here.
        </p>
        <p>
          I welcome any interaction and am always exploring new opportunities. Contact me via email: <Link href="mailto:hi@yuangwei.com">hi@yuangwei.com</Link>
        </p>
      </div>
    </section>
  );
}
