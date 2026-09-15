import { productsServices } from "@/services/products"
import { useQuery } from "@tanstack/react-query"

export const useProductsBySearch = (q: string) => {
  return useQuery({
    queryKey: ["productsBySearch", q],
    queryFn: () => productsServices.getBySearch(q),
  })
}
