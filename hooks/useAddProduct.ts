import { productsServices } from "@/services/products"
import { AddProduct } from "@/types/product"
import { useMutation } from "@tanstack/react-query"

export const useAddProduct = () => {
  return useMutation({
    mutationFn: (data: AddProduct) => productsServices.add(data),
  })
}
