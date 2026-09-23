"use client"
import ProductDetails from "./components/product-details"
import { useProduct } from "@/hooks/useProduct"
import { useParams } from "next/navigation"
export default function Page() {
  const { product } = useParams<{ product: string }>()
  const { data, isLoading } = useProduct(product)
  return (
    <div className="">
      <ProductDetails product={data} isLoading={isLoading} />
    </div>
  )
}
