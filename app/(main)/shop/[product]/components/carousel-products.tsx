"use client"

import ProductCard from "@/app/components/layout/productCard"
import { productsServices } from "@/services/products"
import { Carousel, CarouselSlide } from "@mantine/carousel"
import { useQuery } from "@tanstack/react-query"
import "@mantine/carousel/styles.css"

export default function CarouselProducts() {
  const { data: products } = useQuery({
    queryKey: ["related-products", "kitchen-accessories"],
    queryFn: () =>
      productsServices.getByCategory({
        category: "kitchen-accessories",
        limit: 8,
      }),
  })

  return (
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
            <ProductCard
              desc={item.description}
              discount={item.discountPercentage}
              id={item.id}
              img={item.images[0]}
              price={item.price}
              title={item.title}
            />
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  )
}
