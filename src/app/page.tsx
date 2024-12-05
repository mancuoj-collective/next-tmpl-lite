import { DarkModeToggle } from '@/components/theme'
import { Button } from '@/components/ui/button'

export default async function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center gap-5">
      <Button asChild>
        <a href="https://github.com/mancuoj-collective/next-tmpl-lite">
          <span className="i-mingcute-github-line" />
          GitHub
        </a>
      </Button>
      <DarkModeToggle />
    </div>
  )
}
