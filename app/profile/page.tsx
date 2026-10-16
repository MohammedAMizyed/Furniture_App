"use client"
import { useMe } from "@/hooks/auth/useMe"
import Header from "./components/header"
import Footer from "./components/footer"
import { Button } from "@mantine/core"
import Link from "next/link"
export default function Page() {
  const { data, isLoading, isError, error } = useMe()

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen font-bold text-4xl animate-pulse">
        Loading...
      </div>
    )
  if (isError)
    return (
      <div className="flex justify-center items-center h-screen font-bold text-3xl animate-pulse">
        Error: {error?.message}
      </div>
    )
  if (!data)
    return (
      <div className="text-bold flex justify-center item-center text-4xl h-screen">
        There is no data
      </div>
    )
  return (
    <div className="min-h-screen container bg-[#0b0f19]!">
      <div className="relative">
        <div className="absolute top-10 right-0 sm:top-10 sm:right-10 z-50">
          <Button
            component={Link}
            href="/"
            variant="outline"
            c="white"
            style={{ cursor: "pointer" }}
          >
            Home
          </Button>
        </div>
        <Header data={data} />
        <Footer data={data} />
      </div>
    </div>
  )
}
