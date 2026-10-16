"use client"

import ProductCard from "@/app/components/layout/productCard"
import { productsServices } from "@/services/products"
import { useQuery } from "@tanstack/react-query"
import "@mantine/carousel/styles.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation" // ← ضيفها

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
    return (
      <div className="animate-pulse text-3xl font-bold text-center my-10">
        Loading...
      </div>
    )
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

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
          >
            {products?.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  )
}
