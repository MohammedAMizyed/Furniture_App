"use client"
import { useState } from "react"
import FilteringForm from "./filtering-form"
import SearchInput from "./search-input"
import { CATEGORY_KEYS } from "@/config"
import { CategoriesTypeResponse } from "@/types/categories"
import Products from "./products"

type Props = {
  categories: CategoriesTypeResponse[]
}
export default function Filtering({ categories }: Props) {
  const [search, setSearch] = useState<string>("")

  const [choice, setChoice] = useState<(typeof CATEGORY_KEYS)[number] | null>(
    null,
  )
  return (
    <div>
      <div className=" bg-[#F9F1E7] container mx-auto px-5">
        <div className="py-5 flex gap-5 justify-start items-start">
          <div className=" flex-1 rounded-md">
            <FilteringForm setChoice={setChoice} categories={categories} />
          </div>
          <div className="flex-1 my-2">
            <SearchInput search={search} setSearch={setSearch} />
          </div>
        </div>
      </div>

      <Products choice={choice} search={search} />
    </div>
  )
}
