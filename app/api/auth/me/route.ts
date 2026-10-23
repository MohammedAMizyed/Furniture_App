import axios from "axios"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get("accessToken")?.value

  if (!token) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 })
  }

  try {
    const response = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    // const response = await fetch("https://dummyjson.com/auth/me", {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   cache: "no-store",
    // })

    if (response.status < 200 || response.status >= 300) {
      return NextResponse.json(
        { message: "Please login again" },
        { status: 401 },
      )
    }

    const user = response.data

    return NextResponse.json({ user })
  } catch {
    return NextResponse.json(
      { message: "Could not verify user" },
      { status: 502 },
    )
  }
}
