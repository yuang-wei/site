import { Toaster } from 'sonner'
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { getSiteConfig } from './lib/payload'
import './globals.css'

export async function generateMetadata() {
  const siteConfig = await getSiteConfig()
  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: {
      default: siteConfig.siteName,
      template: `%s | ${siteConfig.siteName}`,
    },
  }
}

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <body className="antialiased flex flex-col items-center justify-center mx-auto">
        <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
          {children}
        </main>
        <Toaster
          toastOptions={{
            classNames: {
              error: 'bg-red-400',
              success: 'text-green-400',
              warning: 'text-yellow-400',
              info: 'bg-blue-400',
            },
          }}
        />
      </body>
    </html>
  )
}
