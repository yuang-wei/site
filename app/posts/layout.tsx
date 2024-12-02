import { Navbar } from "app/components/nav";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}