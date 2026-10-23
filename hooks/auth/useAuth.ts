"use client"

import { useEffect, useState } from "react"
import { authServices } from "@/services/auth"

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    authServices
      .me()
      .then(() => {
        setIsLoggedIn(true)
      })
      .catch(() => {
        setIsLoggedIn(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const logout = async () => {
    try {
      await authServices.logout()
      setIsLoggedIn(false)
      window.location.href = "/auth/login"
    } catch (error) {
      console.error("Logout failed", error)
    }
  }

  return { isLoggedIn, isLoading, logout }
}
