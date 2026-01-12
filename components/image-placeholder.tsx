import { ShoppingBag } from "lucide-react"

export function ImagePlaceholder({ alt }: { alt: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <div className="text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground/50" />
        <p className="mt-2 text-sm text-muted-foreground/50">{alt}</p>
      </div>
    </div>
  )
}

