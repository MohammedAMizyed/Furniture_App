"use client"
import ProductCard from "@/app/components/layout/productCard"
import { Product } from "@/types/product"

type Props = {
  products: Product[]
  pendingSearch: boolean
  errorSearch: boolean
  isFetching: boolean
}
export default function Products({
  errorSearch,
  pendingSearch,
  products,
  isFetching,
}: Props) {
  if (pendingSearch) {
    return (
      <div className="text-2xl font-bold my-10 text-center animate-pulse">
        Loading...
      </div>
    )
  }
  if (errorSearch) {
    return (
      <div className="text-red-700 text-2xl font-bold my-10 text-center animate-pulse">
        There is something went wrong
      </div>
    )
  }

  if (!products) {
    return (
      <div className="container my-10">
        <h1 className="text-3xl font-bold text-center">Search For Product</h1>
      </div>
    )
  }
  if (!products.length) {
    return (
      <div className="container my-10">
        <h1 className="text-3xl font-bold text-center">No Products Found</h1>
      </div>
    )
  }
  return (
    <div className=" container my-10">
      {isFetching && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 animate-pulse" />
      )}
      <div className="flex justify-center items-center gap-9 flex-wrap">
        {products.map((item) => (
          <div key={item.id} className="basis-[23%]">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
