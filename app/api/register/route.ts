import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import { db } from "@/lib/db"
import { z } from "zod"

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = userSchema.parse(json)

    const existingUser = await db.user.findUnique({
      where: {
        email: body.email,
      },
    })

    if (existingUser) {
      return new NextResponse("User with this email already exists", { status: 409 })
    }

    const hashedPassword = await hash(body.password, 10)

    const user = await db.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        name: body.name || body.email.split("@")[0],
        role: "SHOPKEEPER", // Default role
      },
    })

    const { password, ...result } = user

    return NextResponse.json(result)
  } catch (error) {
    console.error("Registration error:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

