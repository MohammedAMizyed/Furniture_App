import Image from "next/image"
import { CiShare2 } from "react-icons/ci"
import { GiLoveHowl } from "react-icons/gi"

interface Props {
  img: string
  title: string
  desc: string
  price: number
}
export default function ProductCard({ img, title, desc, price }: Props) {
  return (
    <div className="group  bg-[#F4F5F7] relative overflow-hidden">
      <div className=" opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0 left-0 bg-[#3a3a3a7d] h-full w-full">
        <div className="absolute top-1/2 left-1/2 -translate-1/2">
          <div className=" my-2 text-center cursor-pointer text-[24px] font-black p-2 w-[200px] bg-white text-[#B88E2F]">
            Add To Cart
          </div>
          <div className="text-white flex justify-center items-center gap-5">
            <div className="cursor-pointer flex gap-1 items-center justify-center">
              <CiShare2 />
              Share
            </div>
            <div className="cursor-pointer flex gap-1 items-center justify-center">
              <GiLoveHowl />
              Like
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[285px] m-auto  max-h-[300px] overflow-hidden">
        <Image
          className="h-full w-full object-contain"
          src={img}
          alt={title}
          width={285}
          height={300}
        />{" "}
      </div>
      <div className="p-3">
        <h1 className="h-20 text-[24px] font-semibold ">{title}</h1>
        <p className="text-[16px] font-medium text-[#898989]">{desc}</p>
        <h4 className="text-[20px] font-semibold">{price}</h4>
      </div>
    </div>
  )
}
