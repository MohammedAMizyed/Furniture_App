import Advantages from "@/app/components/layout/advantages"
import LandingPages from "@/app/components/layout/landing"
import LandingCart from "./components/landing-cart"

export default function page() {
  return (
    <div>
      <LandingPages />
      <LandingCart />
      <Advantages />
    </div>
  )
}
