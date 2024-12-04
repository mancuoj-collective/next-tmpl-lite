'use client'

import { useDark } from '@/hooks/use-dark'
import { cn } from '@/lib/utils'

export function DarkModeToggle({ className }: { className?: string }) {
  const { toggleDark } = useDark()

  return (
    <button
      type="button"
      onClick={toggleDark}
      className={cn('inline-flex items-center justify-center', className)}
    >
      <span className="sun i-mingcute-sun-line rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <span className="moon i-mingcute-moon-stars-line absolute rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
    </button>
  )
}
