import api from "@/services/api"
import { CategoriesTypeResponse } from "@/types/categories"
import { useQuery } from "@tanstack/react-query"

const fetchingData = async () => {
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

export const useCategories = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: fetchingData,
  })
}
