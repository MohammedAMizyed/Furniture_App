"use client"
import { Button, Rating } from "@mantine/core"
import Image from "next/image"
import img from "../../../../../public/categoryImg.svg"

import { Product } from "@/types/product"
import HeroSection from "./hero-section"
import InformationProduct from "./Information-product"
import { useState } from "react"
import { FaFacebook } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import CarouselProducts from "./carousel-products"
import { notifications } from "@mantine/notifications"
import useCartStore from "@/stores/useCart"

type Props = {
  product: Product | undefined
  isLoading: boolean
}
export default function ProductDetails({ product, isLoading }: Props) {
  const data = product
  const [quantity, setQuantity] = useState<number>(0)
  const { add, products } = useCartStore()
  const handleAddProduct = (product: Product) => {
    const filterProduct = products.some((item) => item.id === product.id)
    add(product)
    if (filterProduct) {
      notifications.show({
        title: "The Product Already Exist In Your Cart",
        message: "",
        color: "red",
        priority: 10,
        position: "top-center",
      })
    } else {
      notifications.show({
        title: "Add Successfully",
        message: "This Product in your cart right know🌟",
        position: "top-center",
      })
    }
    return filterProduct
  }
  return (
    <>
      <HeroSection
        title={
          product?.title ?? (
            <div className="animate-pulse text-3xl font-bold">loading...</div>
          )
        }
      />
      <div className="container">
        <div className="flex justify-center  gap-20 border-b-1 my-2 border-[#9F9F9F] py-10 ">
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
            <h1 className="text-[42px] font-normal">
              {isLoading ? (
                <div className="flex  items-center  h-full animate-pulse text-3xl font-bold">
                  Loading...
                </div>
              ) : (
                data?.title
              )}
            </h1>
            <h4 className="text-[24px] font-medium text-[#9F9F9F]">
              Rs. 250,000.00
            </h4>
            <div className="flex items-center gap-2">
              <div> rated </div> |{" "}
              <Rating
                value={Math.round(Number(product?.rating ?? 0) * 2) / 2}
                fractions={2}
                readOnly
              />
              {/* <Rating
                defaultValue={Math.round(Number(product?.rating ?? 0) * 2) / 2}
              /> */}
              <span className="text-[13px] font-normal text-[#9F9F9F]">
                {data?.reviews.length} Customer Review
              </span>
            </div>
            <p className="text-[13px] font-normal max-w-[400px] my-3">
              {data?.description}
            </p>
            <div>
              <div>
                <div>
                  Origin Price : <span>{data?.price}</span>
                </div>
                <div className="text-green-500">
                  Discount : <span>{data?.discountPercentage}%</span>
                </div>
                <div>
                  stock :{" "}
                  <span>{data?.stock == 0 ? "Out of stock" : data?.stock}</span>
                </div>
                <div>
                  Is Available : <span>{data?.availabilityStatus}</span>
                </div>
                <div>
                  Return Policy : <span>{data?.returnPolicy}</span>
                </div>
              </div>
            </div>
            <div className="border-b-1! py-3 border-[#9F9F9F] flex justify-start items-center gap-2">
              <div className="flex items-center gap-2">
                Quantity:
                <div className="flex item-center  gap-5 ">
                  <Button
                    variant="light"
                    className="bg-[#F9F1E7]! hover:bg-[#f9f1e7d3]!"
                    onClick={() => {
                      setQuantity((e) => e + 1)
                    }}
                  >
                    +
                  </Button>
                  <div>{quantity}</div>
                  <Button
                    variant="light"
                    className="bg-[#F9F1E7]! hover:bg-[#f9f1e7d3]!"
                    disabled={quantity <= 0}
                    onClick={() => {
                      setQuantity((e) => e - 1)
                    }}
                  >
                    -
                  </Button>
                </div>
              </div>

              <Button
                onClick={() => {
                  if (data) handleAddProduct(data)
                }}
                variant="light"
                className="text-[#616161]! bg-[#F9F1E7]!"
              >
                Add To Cart
              </Button>
            </div>
            <div className="my-3">
              <div className="flex my-2 items-center ">
                <span className="block w-25">SKU </span> : {data?.sku}
              </div>
              <div className="flex my-2 items-center ">
                <span className="block w-25">Category </span> : {data?.category}
              </div>
              <div className="flex my-2 items-center ">
                <span className="block w-25">Tags </span> :{" "}
                {data?.tags.map((item) => item)}
              </div>
              <div className="flex my-2 items-center ">
                <span className="block w-25">Share </span> :{" "}
                <div className="flex items-center gap-2 mx-2">
                  <FaFacebook />
                  <FaLinkedin />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center my-10 items-center  h-full animate-pulse text-3xl font-bold">
          Loading...
        </div>
      ) : (
        product && <InformationProduct product={product} />
      )}
      <CarouselProducts />
    </>
  )
}
