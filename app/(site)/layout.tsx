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
      <body>
        {children}
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
