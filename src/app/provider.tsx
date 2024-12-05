'use client'

import { Provider } from 'jotai'

import { ThemeScript } from '@/components/theme'
import { Toaster } from '@/components/ui/sonner'

export function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <Provider>
      <ThemeScript />
      {children}
      <Toaster richColors />
    </Provider>
  )
}
