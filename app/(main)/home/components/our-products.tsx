import ProductCard from "@/app/components/layout/productCard"
import { productsServices } from "@/services/products"
import { Button } from "@mantine/core"
import Link from "next/link"

export default async function OurProducts() {
  const products = await productsServices.getByCategory({
    category: "kitchen-accessories",
    limit: 8,
  })
  return (
    <div className="container my-20">
      <h1 className="text-[40px] mb-10 font-bold text-center">Our Products</h1>
      <div className="flex justify-center items-start gap-9 flex-wrap ">
        {products.map((item) => {
          return (
            <div key={item.id} className=" basis-[90%]  sm:basis-[23%]">
              <ProductCard product={item} />
            </div>
          )
        })}
      </div>
      <Link href={"/shop"}>
        <Button
          className="my-10 text-center m-auto flex! justify-center!"
          variant="outline"
          color="yellow"
          size="xl"
          radius="xs"
          w={245}
        >
          See
        </Button>
      </Link>
    </div>
  )
}
