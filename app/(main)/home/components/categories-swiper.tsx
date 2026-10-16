"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import furnitureImg from "../../../../public/bedroom.svg"
import kitchenImg from "../../../../public/dining.svg"
import decorationImg from "../../../../public/living.svg"
import "swiper/css"
import "swiper/css/navigation" // ← ضيفها

import { CategoriesTypeResponse } from "@/types/categories"
import Image from "next/image"
type Props = {
  categoriesData: CategoriesTypeResponse[]
}
export default function CategoriesSwiper({ categoriesData }: Props) {
  const categoriesImages: Record<string, typeof furnitureImg> = {
    furniture: furnitureImg,
    "home-decoration": decorationImg,
    "kitchen-accessories": kitchenImg,
  }
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 }, // شاشة متوسطة: عنصرين
      }}
    >
      {categoriesData?.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col justify-center items-center">
            <div className="max-h-[480px] max-w-[380px] overflow-hidden rounded-xl">
              <Image
                className="h-full w-full object-cover"
                src={categoriesImages[item.slug] ?? furnitureImg}
                alt={item.name}
              />
            </div>
            <h2 className="my-5 text-[24px] font-semibold">{item.name}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
