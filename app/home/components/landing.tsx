import Image from "next/image"

import landingBg from "../../../public/landingBg.svg"
export default function LandingHomePage() {
  return (
    <div>
      <div className="relative   h-[calc(100vh-80px)]">
        <Image className="h-full w-full object-cover" src={landingBg} alt="" />
        <div className=" max-w-160 top-[50%] -translate-y-1/2 right-30 max-h-[450px] absolute rounded-xl p-10 bg-[#FFF3E3]">
          <h3 className="text-[16px] font-semibold">New Arrival</h3>
          <h2 className="text-[52px] font-bold text-[#B88E2F]">
            Discover Our New Collection
          </h2>
          <p className="text-[18px font-medium]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="cursor-pointer my-5 p-5 min-w-[200px] uppercase text-[#FFFFFF] bg-[#B88E2F]  text-[16px] font-bold">
            BUY Now
          </button>
        </div>
      </div>
    </div>
  )
}
