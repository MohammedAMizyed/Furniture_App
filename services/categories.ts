import { CategoriesTypeResponse } from "@/types/categories"
import api from "./api"

export const categoriesApi = async () => {
  const furnitureCategories = [
    "furniture",
    "home-decoration",
    "kitchen-accessories",
  ]

  const response = await api.get<CategoriesTypeResponse[]>(
    "/products/categories",
  )

  const categories = response.data

  const filteredCategories = categories.filter((category: { slug: string }) =>
    furnitureCategories.includes(category.slug),
  )

  return filteredCategories
}
