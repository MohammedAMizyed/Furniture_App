import api from "@/services/api"
import { ProductsTypeResponse } from "@/types/product"
import { useQuery } from "@tanstack/react-query"

const fetchingData = async () => {
  const response = await api.get<ProductsTypeResponse>(
    "/products/category/furniture",
    {
      params: {
        limit: 10,
      },
    },
  )
  return response.data
}
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchingData,
  })
}
