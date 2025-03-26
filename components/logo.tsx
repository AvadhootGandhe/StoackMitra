import { Package } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
        <Package className="h-5 w-5 text-primary" />
      </div>
      <span className="text-xl font-bold text-white">Stock Mitra</span>
    </Link>
  )
}

