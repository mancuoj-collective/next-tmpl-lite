import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <div className="flex items-center gap-2.5">
        <Button>Next</Button>
        <ThemeToggle />
      </div>
    </div>
  )
}
