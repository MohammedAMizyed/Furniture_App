import { AddProduct, Product, ProductsTypeResponse } from "@/types/product"
import api from "./api"
import { category_keys } from "@/types/categories"

type SearchProps = {
  q: string
  limit: number
  skip: number
}
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
  getBySearch: async ({ q, limit, skip }: SearchProps) => {
    const response = await api.get<ProductsTypeResponse>(`/products/search`, {
      params: {
        q,
        limit,
        skip,
      },
    })
    return response.data
  },
  delete: async (id: number | string) => {
    const response = await api.delete(`/products/${id}`)
    return response.data
  },
  add: async (data: AddProduct) => {
    const response = await api.post(`/products/add`, data)
    return response.data
  },
  update: async (data: { title: string; price: string | number }) => {
    const response = await api.put(`/products/1`, data)
    return response.data
  },
}
