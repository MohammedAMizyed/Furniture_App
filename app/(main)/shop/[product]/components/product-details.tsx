import { Button } from "@mantine/core"
import Image from "next/image"
import img from "../../../../../public/categoryImg.svg"

import { Product } from "@/types/product"
import HeroSection from "./hero-section"
import InformationProduct from "./Information-product"
type Props = {
  product: Product | undefined
  isLoading: boolean
}
export default function ProductDetails({ product, isLoading }: Props) {
  const data = product
  // if (isLoading) {
  //   return <div className="animate-pulse text-3xl font-bold">Loading...</div>
  // }
  return (
    <>
      <HeroSection title={product?.title ?? "unKnown"} />
      <div className="container">
        <div className="flex justify-center  gap-10 border-b-1 my-2 border-[#9F9F9F] py-10 ">
          <div className="flex-1/3">
            {isLoading ? (
              <div className="flex justify-center items-center  h-full animate-pulse text-3xl font-bold">
                Loading...
              </div>
            ) : (
              <div className="flex  gap-5">
                <div className="flex gap-5 flex-col">
                  {data?.images.map((item, index) => (
                    <Image
                      key={index}
                      width={80}
                      height={80}
                      className="bg-[#F9F1E7] p-1 w-30 h-25 object-cover rounded-2xl"
                      alt=""
                      src={item}
                    />
                  ))}
                </div>
                <div className=" rounded-2xl overflow-hidden w-full h-full w-[420px] h-[500px]">
                  <Image
                    width={400}
                    height={500}
                    className="object-cover bg-[#F9F1E7]"
                    alt=""
                    src={data?.images[0] ?? img}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex-2/3">
            <h1 className="text-[42px] font-normal">{data?.title}</h1>
            <h4 className="text-[24px] font-medium text-[#9F9F9F]">
              Rs. 250,000.00
            </h4>
            <div className="flex items-center gap-2">
              <div> rated </div> |{" "}
              <span className="text-[13px] font-normal text-[#9F9F9F]">
                {data?.reviews.length} Customer Review
              </span>
            </div>
            <p className="text-[13px] font-normal">{data?.description}</p>
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
              <div className="flex items-center gap-">
                <span className="block w-25">SKU </span> : {data?.sku}
              </div>
              <div className="flex items-center gap-">
                <span className="block w-25">Category </span> : {data?.category}
              </div>
              <div className="flex items-center gap-">
                <span className="block w-25">Tags </span> :{" "}
                {data?.tags.map((item) => item)}
              </div>
              <div className="flex items-center gap-">
                <span className="block w-25">Share </span> : {"78"}
              </div>
            </div>
          </div>
        </div>
      </div>
      {product && <InformationProduct product={product} />}
    </>
  )
}
