"use client"
import Image from "next/image"
import bgImg from "../../../public/altBg.svg"
import logo from "../../../public/Meubel House_Logos-05.svg"
import { usePathname } from "next/navigation"

import Link from "next/link"

export default function LandingPages() {
  const location = usePathname()

  return (
    <div className="select-none overflow-hidden relative w-full max-h-79 h-full">
      <Image className="h-full w-full object-cover" src={bgImg} alt="" />
      <div className=" absolute top-1/2 left-1/2 -translate-1/2">
        <Image className=" m-auto" src={logo} alt="" />
        <h1 className="text-[48px] font-medium ">
          {location.slice(1, 2).toUpperCase() + location.slice(2)}{" "}
        </h1>
        <div className="flex justify-center items-center gap-1">
          <Link href={"/"} className="text-[16px] font-medium">
            Home {`>`}
          </Link>{" "}
          <span className="text-[16px] font-light">{location.slice(1)}</span>
        </div>
      </div>
    </div>
  )
}
