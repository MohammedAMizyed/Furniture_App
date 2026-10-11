"use client"
import useCartStore from "@/stores/useCart"
import useFavorite from "@/stores/useFavorite"
import { Product } from "@/types/product"
import { Button, ScrollArea } from "@mantine/core"
import { notifications } from "@mantine/notifications"
import Link from "next/link"
import { CiShare2 } from "react-icons/ci"
import { GiLoveHowl } from "react-icons/gi"
type Props = { product: Product }
export default function ProductCard({ product }: Props) {
  const { add, products } = useCartStore()
  const { add: addFav, products: favProducts } = useFavorite()
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
  }
  const handleAddProductToFav = (product: Product) => {
    const isExistInFav = favProducts.some((item) => item.id == product.id)
    if (isExistInFav) {
      notifications.show({
        title: "The Product Already Exist In Your Cart",
        message: "",
        color: "red",
        priority: 10,
        position: "top-center",
      })
      return
    }
    addFav(product)
    notifications.show({
      title: "Add Successfully",
      message: "This Product in your cart right know🌟",
      position: "top-center",
    })
  }

  return (
    <div className="group  bg-[#F4F5F7] relative overflow-hidden">
      <div className="hidden sm:block opacity-0 transition-opacity duration-00 group-hover:opacity-100 absolute top-0 left-0 bg-[#3a3a3a7d] h-full w-full">
        <div className="z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {" "}
          <div className=" my-2 text-center cursor-pointer text-[24px] font-black p-2 w-[200px] bg-white text-[#B88E2F]">
            <Button
              onClick={() => {
                handleAddProduct(product)
              }}
              className="bg-[#fce8cf]! text-black!"
              variant="filled"
            >
              Add To Cart
            </Button>
          </div>
          <div className="text-white flex justify-center items-center gap-5">
            <Link href={`/shop/${product.id}`}>
              <div
                onClick={() => {
                  handleAddProductToFav(product)
                }}
                className="cursor-pointer flex gap-1 items-center justify-center"
              >
                <CiShare2 />
                Link
              </div>
            </Link>

            <div
              onClick={() => {
                handleAddProductToFav(product)
              }}
              className="cursor-pointer flex gap-1 items-center justify-center"
            >
              <GiLoveHowl />
              Like
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 relative max-w-[285px] m-auto  max-h-[300px] overflow-hidden">
        {
          // eslint-disable-next-line @next/next/no-img-element
        }
        <img
          className="h-[300px] w-[285px] object-contain"
          src={product.images[0]}
          alt={product.title}
          width={285}
          height={300}
        />
        <div className="absolute top-5 left-5 p-2 w-13  flex justify-center items-center text-white bg-[#B88E2F] h-13 left-0 rounded-[50%]   ">
          {Math.round(product.discountPercentage)}%
        </div>
      </div>
      <div className="p-3">
        <ScrollArea
          className="my-2! h-[30px]!"
          type="auto"
          scrollHideDelay={1500}
        >
          <h1 className="text-[17px] font-semibold  mb-5 sm:my-0 ">
            {product.title}
          </h1>
        </ScrollArea>
        <ScrollArea
          className="my-2! h-[80px]!"
          type="auto"
          scrollHideDelay={1500}
        >
          <p className="text-[16px] font-medium ">{product.description}</p>
        </ScrollArea>
        <h4 className="text-[20px] font-semibold">{product.price}$</h4>
        <div className="block sm:hidden">
          <div className="my-3 text-white flex justify-center items-center gap-3">
            <Button
              onClick={() => {
                handleAddProduct(product)
              }}
              className="bg-[#B88E2F]! hover:bg-[#b88f2fcf]! duration-200!"
            >
              Add To Cart
            </Button>
            <Link href={`/shop/${product.id}`}>
              <Button
                variant="white"
                c={"black"}
                className="bg-[#b88f2f58282]!"
              >
                <div className=" flex gap-1 items-center justify-center">
                  <CiShare2 size={18} />
                  Link
                </div>
              </Button>
            </Link>
            <Button variant="white" c={"black"}>
              {" "}
              <div className="cursor-pointer flex gap-1 items-center justify-center">
                <GiLoveHowl />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
