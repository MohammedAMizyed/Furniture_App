import { COOKIES_ACCESS_TOKEN } from "@/config"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  })

  const data = await response.json()

  if (!response.ok) {
    return NextResponse.json(
      { message: data.message ?? "Login failed" },
      { status: response.status },
    )
  }

  const res = NextResponse.json({
    user: {
      id: data.id,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
    },
  })

  res.cookies.set(COOKIES_ACCESS_TOKEN, data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60,
  })

  return res
}
