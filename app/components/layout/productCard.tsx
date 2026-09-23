import Image from "next/image"
import Link from "next/link"
import { CiShare2 } from "react-icons/ci"
import { GiLoveHowl } from "react-icons/gi"

interface Props {
  img: string
  title: string
  desc: string
  price: number
  discount: number
  id: number
}
export default function ProductCard({
  discount,
  img,
  title,
  desc,
  price,
  id,
}: Props) {
  return (
    <div className="group  bg-[#F4F5F7] relative overflow-hidden">
      <div className=" opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0 left-0 bg-[#3a3a3a7d] h-full w-full">
        <div className="z-20 absolute top-1/2 left-1/2 -translate-1/2">
          <div className=" my-2 text-center cursor-pointer text-[24px] font-black p-2 w-[200px] bg-white text-[#B88E2F]">
            Add To Cart
          </div>
          <div className="text-white flex justify-center items-center gap-5">
            <Link href={`/shop/${id}`}>
              <div className="cursor-pointer flex gap-1 items-center justify-center">
                <CiShare2 />
                Link
              </div>
            </Link>

            <div className="cursor-pointer flex gap-1 items-center justify-center">
              <GiLoveHowl />
              Like
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 relative max-w-[285px] m-auto  max-h-[300px] overflow-hidden">
        <Image
          className="h-full  w-full object-contain"
          src={img}
          alt={title}
          width={285}
          height={300}
        />{" "}
        <div className="absolute top-5 p-2 w-13  flex justify-center items-center text-white bg-[#B88E2F] h-13 left-0 rounded-[50%]   ">
          {Math.round(discount)}%
        </div>
      </div>
      <div className="p-3">
        <h1 className="h-15 text-[24px] font-semibold ">{title}</h1>
        <p className="text-[16px] font-medium ">{desc}</p>
        <h4 className="text-[20px] font-semibold">{price}</h4>
      </div>
    </div>
  )
}
