"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Overview",
      href: "/dashboard",
    },
    {
      name: "Inventory",
      href: "/dashboard/inventory",
    },
    {
      name: "Predictions",
      href: "/dashboard/predictions",
    },
  ]

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "bg-white/20 text-white" : "text-white/70",
          )}
        >
          <div className="rounded-md px-3 py-2">{item.name}</div>
        </Link>
      ))}
    </nav>
  )
}

