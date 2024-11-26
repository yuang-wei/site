import { Toaster } from 'sonner'
import './globals.css'
import { getSiteConfig } from './lib/payload'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col items-center justify-center mx-auto">
        <main className="flex-auto min-w-0 flex flex-col w-full max-w-[640px] px-4 sm:px-6 lg:px-8 pb-20">
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
