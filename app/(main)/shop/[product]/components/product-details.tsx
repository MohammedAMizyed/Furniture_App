import { Button } from "@mantine/core"
import Image from "next/image"
import img from "../../../../../public/categoryImg.svg"
export default function ProductDetails() {
  return (
    <div className=" border-b-0 border-[#9F9F9F] py-10 flex justify-center items-center gap-10">
      <div className="flex  gap-5">
        <div className="flex gap-5 flex-col">
          <Image
            className="w-20 object-cover rounded-2xl overflow-hidden"
            alt=""
            src={img}
          />
          <Image
            className="w-20 object-cover rounded-2xl overflow-hidden"
            alt=""
            src={img}
          />
          <Image
            className="w-20 object-cover rounded-2xl overflow-hidden"
            alt=""
            src={img}
          />
          <Image
            className="w-20 object-cover rounded-2xl overflow-hidden"
            alt=""
            src={img}
          />
        </div>
        <div className="rounded-2xl overflow-hidden w-full h-full max-w-[420px] max-h-[500]">
          <Image className="object-cover w-full h-full" alt="" src={img} />
        </div>
      </div>
      <div>
        <h1 className="text-[42px] font-normal">Asgaard sofa</h1>
        <h4 className="text-[24px] font-medium text-[#9F9F9F]">
          Rs. 250,000.00
        </h4>
        <div>
          <div> rated </div> |{" "}
          <span className="text-[13px] font-normal text-[#9F9F9F]">
            5 Customer Review
          </span>
        </div>
        <p className="text-[13px] font-normal">
          {" "}
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
        <div className="flex flex-col gap-3 ">
          <h4 className="text-[14px] font-normal text-[#9F9F9F]">Size</h4>
          <div></div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h4 className="text-[14px] font-normal text-[#9F9F9F]">color</h4>
          <div></div>
        </div>
        <div className="border-b-1! py-3 border-[#9F9F9F] flex justify-start items-center gap-2">
          <div>quantity</div>
          <Button>Add To Cart</Button>
        </div>
        <div>
          <div>
            <span className="block w-25">SKU </span> : {"12"}
          </div>
          <div>
            <span className="block w-25">Category </span> : {"34"}
          </div>
          <div>
            <span className="block w-25">Tags </span> : {"56"}
          </div>
          <div>
            <span className="block w-25">Share </span> : {"78"}
          </div>
        </div>
      </div>
    </div>
  )
}
