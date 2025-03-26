"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "login" | "register"
}

export function UserAuthForm({ type, className, ...props }: UserAuthFormProps) {
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    if (type === "login") {
      const signInResult = await signIn("credentials", {
        email: values.email.toLowerCase(),
        password: values.password,
        redirect: false,
        callbackUrl: searchParams?.get("from") || "/dashboard",
      })

      setIsLoading(false)

      if (!signInResult?.ok) {
        return toast({
          title: "Something went wrong.",
          description: "Your sign in request failed. Please try again.",
          variant: "destructive",
        })
      }

      window.location.href = signInResult.url || "/dashboard"
    } else {
      // Handle registration
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (!res.ok) {
          throw new Error("Registration failed")
        }

        const signInResult = await signIn("credentials", {
          email: values.email.toLowerCase(),
          password: values.password,
          redirect: false,
          callbackUrl: "/dashboard",
        })

        if (signInResult?.ok) {
          window.location.href = "/dashboard"
        }
      } catch (error) {
        toast({
          title: "Something went wrong.",
          description: "Your registration request failed. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  {type === "login" && (
                    <Button variant="link" className="h-auto p-0 text-xs text-primary" type="button">
                      Forgot password?
                    </Button>
                  )}
                </div>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder={type === "login" ? "Enter your password" : "Create a password"}
                      type={showPassword ? "text" : "password"}
                      autoCapitalize="none"
                      autoComplete={type === "login" ? "current-password" : "new-password"}
                      autoCorrect="off"
                      disabled={isLoading}
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                <span className="ml-2">{type === "login" ? "Signing in..." : "Creating account..."}</span>
              </div>
            ) : (
              <span>{type === "login" ? "Login" : "Sign up"}</span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

