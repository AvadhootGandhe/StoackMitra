import type React from "react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Settings } from "lucide-react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 gradient-bg">
        <div className="container flex h-16 items-center justify-between py-4">
          <Logo />
          <div className="flex items-center gap-4">
            <MainNav />
            <div className="ml-auto flex items-center gap-4">
              <Button variant="secondary" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <UserNav user={session.user} />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted/20">
        <div className="container py-6">{children}</div>
      </main>
    </div>
  )
}

