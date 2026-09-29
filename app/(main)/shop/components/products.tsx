"use client"
import ProductCard from "@/app/components/layout/productCard"
import { useProductsBySearch } from "@/hooks/useProductsBySearch"

type Props = {
  search: string
}
export default function Products({ search }: Props) {
  const {
    data: products,
    isLoading: loadingSearch,
    isError: errorSearch,
  } = useProductsBySearch(search)

  if (loadingSearch) {
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
  return (
    <div className=" container my-10">
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
