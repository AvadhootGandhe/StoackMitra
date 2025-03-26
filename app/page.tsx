import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ArrowRight } from "lucide-react";
import TryAIButton from "@/components/TryAIButton";

export default function HomePage() {
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
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Smart Inventory Management
                </h1>
                <p className="mt-6 text-xl text-white/80">
                  AI-powered inventory predictions to optimize stock levels, reduce costs, and never miss a sale.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/register">
                    <Button size="lg" variant="secondary">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Try AI Button */}
                <div className="mt-8">
                  <TryAIButton />
                </div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dashboard preview"
                  className="rounded-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
