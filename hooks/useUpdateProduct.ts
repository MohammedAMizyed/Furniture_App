import { productsServices } from "@/services/products"
import { UpdateProduct } from "@/types/product"
import { useMutation } from "@tanstack/react-query"

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: (data: UpdateProduct) => productsServices.update(data),
  })
}
