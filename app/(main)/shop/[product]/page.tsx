import HeroSection from "./components/herosection"
import ProductDetails from "./components/product-details"

export default function page() {
  return (
    <div className="">
      <HeroSection name={"mohamed"} />
      <div className="container">
        <ProductDetails />
      </div>
    </div>
  )
}
