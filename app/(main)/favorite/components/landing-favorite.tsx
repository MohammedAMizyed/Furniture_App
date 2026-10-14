"use client"
import useFavorite from "@/stores/useFavorite"
import { Button } from "@mantine/core"

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
                    className="bg-[#F9F1E7] sm:basis-[49%] basis-full  p-4 "
                  >
                    <h1 className="font-bold">{product.title}</h1>
                    <h3 className=" my-3 text-[15px] text-[#a5a5a5]">
                      <span className="text-black! font-semibold mx-1">
                        The Description
                      </span>
                      {product.description}
                    </h3>
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
