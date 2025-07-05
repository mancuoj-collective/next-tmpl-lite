import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { DM_Sans } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const fontSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next',
  description: 'Next.js starter template',
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
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
