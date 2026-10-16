// hooks/useAuth.ts
"use client"
import { useEffect, useState } from "react"

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoggedIn(!!localStorage.getItem("accessToken"))
    setIsLoading(false)
  }, [])

  const logout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")

    setIsLoggedIn(false)
  }

  return { isLoggedIn, isLoading, logout }
}

export const isTokenExpired = () => {
  const expiry = localStorage.getItem("tokenExpiry")
  if (!expiry) return true
  return Date.now() >= Number(expiry)
}
