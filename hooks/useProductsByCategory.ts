import { CATEGORY_KEYS } from "@/config"
import { productsServices } from "@/services/products"
import { useQuery } from "@tanstack/react-query"
export const useProductsByCategories = (
  category: (typeof CATEGORY_KEYS)[number],
) => {
  return useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => productsServices.getByCategory({ category: category }),
    enabled: !!category,
  })
}
