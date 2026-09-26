import Advantages from "@/app/components/layout/advantages"
import LandingPages from "@/app/components/layout/landing"
import Filtering from "./components/filtering"

export default async function ShopPage() {
  return (
    <>
      <LandingPages />
      <Filtering />
      <Advantages />
    </>
  )
}
