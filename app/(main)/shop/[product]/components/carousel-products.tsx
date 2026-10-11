"use client"

import ProductCard from "@/app/components/layout/productCard"
import { productsServices } from "@/services/products"
import { Carousel, CarouselSlide } from "@mantine/carousel"
import { useQuery } from "@tanstack/react-query"
import "@mantine/carousel/styles.css"
import { error } from "node:console"

export default function CarouselProducts() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["related-products", "kitchen-accessories"],
    queryFn: () =>
      productsServices.getByCategory({
        category: "kitchen-accessories",
        limit: 8,
      }),
  })
  if (isError) {
    return (
      <div className="animate-pulse text-3xl font-bold  text-red-700 text-center my-10">
        There is something went wrong...
      </div>
    )
  }
  if (isLoading) {
    ;<div className="animate-pulse text-3xl font-bold text-center my-10">
      Loading...
    </div>
  }
  return (
    <>
      {isLoading ? (
        <div className="animate-pulse text-3xl font-bold text-center my-10">
          Loading...
        </div>
      ) : (
        <div className="mb-10">
          <h2 className="text-center text-[36px] font-black mb-8">
            Related Products
          </h2>
          <Carousel
            withIndicators
            height={350}
            slideSize={{ md: "33.333333%" }}
            slideGap={{ md: "md" }}
            emblaOptions={{ loop: true, align: "start" }}
          >
            {products?.map((item) => (
              <CarouselSlide key={item.id}>
                <ProductCard product={item} />
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
      )}
    </>
  )
}
