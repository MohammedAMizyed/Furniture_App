import { CATEGORY_KEYS } from "@/config"

export interface CategoriesTypeResponse {
  slug: string
  name: string
  url: string
}

export type category_keys = (typeof CATEGORY_KEYS)[number]
