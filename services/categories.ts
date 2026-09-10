import { CategoriesTypeResponse, category_keys } from "@/types/categories"
import api from "./api"
import { CATEGORY_KEYS } from "@/config"

export const categoriesServices = {
  get: async () => {
    const response = await api.get<CategoriesTypeResponse[]>(
      "/products/categories",
    )

    const filteredCategories = response.data.filter(
      (category: { slug: string }) =>
        CATEGORY_KEYS.includes(category.slug as category_keys),
    )

    return filteredCategories
  },
  update: (id: string) => {
    // a function update a category
  },
}
