import LandingPages from "../components/layout/landing"
import Filtering from "./components/filtering"
import { FiFilter } from "react-icons/fi"

export default function ShopPage() {
  return (
    <>
      <LandingPages />
      <div className="flex  text-[20px] font-black justify-start items-center p-10 container">
        <FiFilter size={30} />
        Filter
      </div>
      {/* <Filtering /> */}
      Shop Page
    </>
  )
}
