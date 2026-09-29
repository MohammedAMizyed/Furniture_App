import Image from "next/image"

import landingBg from "../../../../public/landingBg.svg"
import Link from "next/link"
import { Button } from "@mantine/core"
export default function LandingHomePage() {
  return (
    <div>
      <div className="relative   h-[calc(100vh-80px)]">
        <Image className="h-full w-full object-cover" src={landingBg} alt="" />
        <div className=" w-[200px] h-[250px]  right-2 sm:h-140 sm:w-80 lg:h-[450px] lg:w-160 top-[50%] sm:-translate-y-1/2 lg:right-30  absolute rounded-xl p-10 bg-[#FFF3E3]">
          <h3 className="sm:text-[16px] font-semibold">New Arrival</h3>
          <h2 className="sm:text-[52px] font-bold text-[#B88E2F]">
            Discover Our New Collection
          </h2>
          <p className="sm:block hidden text-[18px] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href={`/shop`}>
            <Button
              variant="filled"
              className=" my-5! sm:h-14! rounded-none! sm:min-w-[200px]!  uppercase! text-[#FFFFFF]! bg-[#B88E2F]!  sm:text-[16px]! font-bold!"
            >
              BUY Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
