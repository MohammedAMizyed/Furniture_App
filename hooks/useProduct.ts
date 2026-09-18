import { productsServices } from "@/services/products"
import { useQuery } from "@tanstack/react-query"

export const useProduct = (id: string | number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productsServices.getById(id),
    // dont do the fetch in id is null or undefined
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 دقائق البيانات تفضل fresh
  })
}
