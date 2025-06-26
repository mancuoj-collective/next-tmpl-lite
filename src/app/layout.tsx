import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Libre_Baskerville } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const fontSans = Libre_Baskerville({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Next',
  description: 'Next.js template lite version',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, 'font-sans antialiased')}>
        <ThemeProvider attribute="class" storageKey="next-tmpl-theme" disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
