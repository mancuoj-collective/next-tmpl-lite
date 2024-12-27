'use client'

import { Provider } from 'jotai'
import Script from 'next/script'

import { ThemeScript, TwScreenIndicator } from '@/components/theme'
import { Toaster } from '@/components/ui/sonner'

export function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <Provider>
      {/* TODO: remove it if not needed */}
      {process.env.NODE_ENV === 'production' && (
        <Script
          defer
          src="https://a.mancuoj.me/script.js"
          data-website-id="deb72122-5107-46f2-8067-8f2a2cf83aa3"
        />
      )}
      <ThemeScript />
      {children}
      <TwScreenIndicator />
      <Toaster richColors />
    </Provider>
  )
}
