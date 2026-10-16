"use client"
import useFavorite from "@/stores/useFavorite"
import { Button, ScrollArea } from "@mantine/core"
import Image from "next/image"

export default function LandingFavorite() {
  const { products, delete: deletePro, reset } = useFavorite()

  return (
    <div className="container">
      <div className="flex flex-col-reverse sm:flex-row my-15 gap-15  justify-between">
        <div className="flex-3/7">
          {!products.length ? (
            <div className="text-[20px] font-bold flex justify-center items-center my-10">
              There Is No Products
            </div>
          ) : (
            <div className="flex  items-center gap-3  flex-wrap">
              {products?.map((product) => {
                return (
                  <div
                    key={product.id}
                    className=" sm:basis-[49%] basis-full  p-4 "
                  >
                    <div className="flex justify-center rounded-2xl overflow-hidden items-stretch ">
                      <div className="basis-[50%] flex justify-center items-center bg-[#F9F1E7] ">
                        <img
                          className="h-[200px]  min-w-[185px] object-cover"
                          src={product.images[0]}
                          alt={product.title}
                        />{" "}
                      </div>
                      <div className="basis-[50%] p-2 bg-[#dddddd7a]">
                        <ScrollArea
                          className="my-2! h-[48px]! sm:h-[30px]!"
                          type="auto"
                          scrollHideDelay={1500}
                        >
                          <h1 className="text-[18px] font-semibold  mb-5 sm:my-0 ">
                            {product.title}
                          </h1>
                        </ScrollArea>
                        <div className=" my-3 text-[14px] text-[#a5a5a5]">
                          <ScrollArea
                            className="my-2! h-[148px]! "
                            type="auto"
                            scrollHideDelay={1500}
                          >
                            <p className=" font-semibold  mb-5 sm:my-0 ">
                              {product.description}
                            </p>
                          </ScrollArea>
                        </div>
                        <div>
                          <Button
                            onClick={() => {
                              deletePro(product.id)
                            }}
                            className="bg-red-500! duration-300! hover:bg-red-300!"
                            variant="filled"
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <div className="flex-1/7 bg-[#F9F1E7] p-5 ">
          <h1 className=" mb-5 text-[32px] font-bold text-center">
            Favorite Totals
          </h1>
          <div className="flex gap-2">
            Items{" "}
            <span className="text-red-700 font-bold text-xl">
              {products.length}
            </span>
          </div>
          <Button className="my-2 w-fit block! mx-auto! text-center!">
            Check Out
          </Button>
          <Button
            disabled={!products.length}
            onClick={reset}
            className="bg-red-500! duration-300! hover:bg-red-300!  w-fit block! mx-auto! text-center!"
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  )
}
