import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ArrowRight, BarChart3, Brain, Clock, Package2, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "About - Stock Mitra",
  description: "About Stock Mitra - AI-powered inventory management",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="gradient-bg">
        <div className="container flex h-16 items-center justify-between py-4">
          <Logo />
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="secondary" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="gradient-bg py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Stock Mitra</h1>
              <p className="mt-6 text-xl text-white/80">
                Revolutionizing inventory management with AI-powered predictions
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Stock Mitra was created with a simple mission: to help businesses of all sizes optimize their inventory
                management through intelligent, data-driven insights. We believe that effective inventory management is
                the backbone of any successful retail or wholesale operation, and our platform is designed to make this
                process as seamless and efficient as possible.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our AI-powered platform helps shopkeepers and suppliers make smarter restocking decisions, reduce excess
                inventory, and ensure products are always available when customers need them.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">Key Features</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Real-time Tracking</h3>
                <p className="mt-2 text-muted-foreground">
                  Monitor your inventory levels in real-time with intuitive dashboards and alerts.
                </p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">AI Predictions</h3>
                <p className="mt-2 text-muted-foreground">
                  Leverage machine learning to forecast demand and optimize reorder points.
                </p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Low Stock Alerts</h3>
                <p className="mt-2 text-muted-foreground">
                  Receive timely notifications when inventory levels fall below thresholds.
                </p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Package2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Supplier Integration</h3>
                <p className="mt-2 text-muted-foreground">
                  Connect directly with suppliers for seamless reordering and communication.
                </p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Lead Time Optimization</h3>
                <p className="mt-2 text-muted-foreground">
                  Calculate optimal lead times based on historical data and supplier performance.
                </p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Actionable Insights</h3>
                <p className="mt-2 text-muted-foreground">
                  Transform data into clear, actionable recommendations for your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Ready to optimize your inventory?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join thousands of businesses that have transformed their inventory management with Stock Mitra.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link href="/register">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/30 py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Package2 className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">Stock Mitra</span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Stock Mitra. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

