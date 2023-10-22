import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Header } from '@/components/Navs'
import { loadTheme } from '@/utils/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexander Mamani',
  description: 'Mobile and Web Developer',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph:{
    type: "website",
    url: "https://alexdev.com.ar",
    title: "Alexander Mamani",
    siteName: "Alexander Mamani",
    description: 'Mobile and Web Developer',
    images: "/og_image.png"
  },
  twitter: {
    card: "summary_large_image",
    site: "@alexqs96",
    creator: "@alexqs96",
  },
  themeColor: "transparent",
  metadataBase: new URL("https://alexdev.com.ar"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} className='scroll-smooth'>
      <head>
      <script
          dangerouslySetInnerHTML={{
            __html: `(${loadTheme.toString()})();`,
          }}
        />
      </head>
      <body className={inter.className+ " antialiased bg-[#f8f8f8] dark:bg-[#111010] max-w-screen-lg w-[90%] mx-auto relative"}>
        <Header/>
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
