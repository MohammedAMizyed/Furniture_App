import { COOKIES_ACCESS_TOKEN } from "@/config"
import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({
    message: "Logged out successfully",
  })

  response.cookies.set(COOKIES_ACCESS_TOKEN, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  })

  return response
}
