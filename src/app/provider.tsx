'use client'

import { Provider } from 'jotai'

import { ThemeScript, UmamiScript } from '@/components/theme'

export function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <Provider>
      <ThemeScript />
      <UmamiScript />
      {children}
    </Provider>
  )
}
