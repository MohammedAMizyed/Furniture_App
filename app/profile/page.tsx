"use client"
import { useMe } from "@/hooks/auth/useMe"
import Header from "./components/header"
import Footer from "./components/footer"
import { Button } from "@mantine/core"
import Link from "next/link"
export default function Page() {
  const { data, isLoading, isError, error } = useMe()

  if (isLoading) return <div>جاري التحميل...</div>
  if (isError) return <div>خطأ: {error?.message}</div>
  if (!data) return <div>لا توجد بيانات</div>
  return (
    <div className="min-h-screen container bg-[#0b0f19]!">
      <div className="relative">
        <div className="absolute top-10 right-10">
          <Link href={"/"}>
            <Button className="cursor-pointer!" c={"white"} variant="outline">
              Home
            </Button>
          </Link>
        </div>
        <Header data={data} />
        <Footer data={data} />
      </div>
    </div>
  )
}
