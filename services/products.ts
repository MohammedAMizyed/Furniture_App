import { Product, ProductsTypeResponse } from "@/types/product"
import api from "./api"
import { category_keys } from "@/types/categories"

export const productsServices = {
  getByCategory: async ({
    category,
    limit = 30,
  }: {
    category: category_keys
    limit?: number
  }) => {
    const fetchingData = await api.get<ProductsTypeResponse>(
      `/products/category/${category}`,
      {
        params: {
          limit,
        },
      },
    )
    return fetchingData.data.products
  },
  getById: async (id: number | string) => {
    const response = await api.get<Product>(`/products/${id}`)
    return response.data
  },
  getBySearch: async (q: string) => {
    const response = await api.get<ProductsTypeResponse>(`/products/search`, {
      params: {
        q,
      },
    })
    return response.data.products
  },
  delete: async (id: number | string) => {
    const response = await api.delete(`/products/${id}`)
    return response.data
  },
}
