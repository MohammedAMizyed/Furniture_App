import Advantages from "@/app/components/layout/advantages"
import LandingFavorite from "./components/landing-favorite"
import LandingPages from "@/app/components/layout/landing"

export default function page() {
  return (
    <>
      <LandingPages />
      <LandingFavorite />
      <Advantages />
    </>
  )
}
