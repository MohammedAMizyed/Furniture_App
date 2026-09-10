import Categories from "./components/categories"
import LandingHomePage from "./components/landing"
import OurProducts from "./components/our-products"
import RoomsSection from "./components/roomsSection"
export default function HomePage() {
  return (
    <>
      <LandingHomePage />
      <Categories />
      <OurProducts />
      <RoomsSection />
    </>
  )
}
