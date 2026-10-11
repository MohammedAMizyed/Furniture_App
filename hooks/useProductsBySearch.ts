import { productsServices } from "@/services/products"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

type Props = {
  q: string
  limit: number
  skip: number
}
export const useProductsBySearch = ({ q, limit, skip }: Props) => {
  return useQuery({
    queryKey: ["productsBySearch", q, limit, skip],
    queryFn: () => productsServices.getBySearch({ q, limit, skip }),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  })
}
