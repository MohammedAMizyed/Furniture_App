"use query"
import ProductCard from "@/app/components/layout/productCard"
import { CATEGORY_KEYS } from "@/config"
import { useProductsByCategories } from "@/hooks/useProductsByCategory"
import { useProductsBySearch } from "@/hooks/useProductsBySearch"

type Props = {
  choice: (typeof CATEGORY_KEYS)[number] | null
  search: string
}
export default function Products({ choice, search }: Props) {
  const { data, isLoading, isError } = useProductsByCategories(choice!)
  const {
    data: searchData,
    isLoading: loadingSearch,
    isError: errorSearch,
  } = useProductsBySearch(search)

  if (loadingSearch || isLoading) {
    return (
      <div className="text-2xl font-bold my-10 text-center animate-pulse">
        Loading...
      </div>
    )
  }
  if (errorSearch || isError) {
    return (
      <div className="text-red-700 text-2xl font-bold my-10 text-center animate-pulse">
        There is something went wrong
      </div>
    )
  }

  const products = search ? searchData : choice ? data : null

  if (!products) {
    return (
      <div className="container my-10">
        <h1 className="text-3xl font-bold text-center">
          Choose A Category Or Search For Product
        </h1>
      </div>
    )
  }
  return (
    <div className=" container my-10">
      <div className="flex justify-center items-center gap-9 flex-wrap">
        {products.map((item) => (
          <div key={item.id} className="basis-[23%]">
            <ProductCard
              title={item.title}
              desc={item.category}
              price={item.price}
              img={item.thumbnail}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
