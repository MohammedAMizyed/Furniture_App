import LandingPages from "@/app/components/layout/landing"
import Filtering from "./components/filtering"
import Advantages from "@/app/components/layout/advantages"
import { categoriesServices } from "@/services/categories"

export default async function ShopPage() {
  const categories = await categoriesServices.get()

  return (
    <>
      <LandingPages />
      <Filtering categories={categories} />
      <Advantages />
    </>
  )
}
