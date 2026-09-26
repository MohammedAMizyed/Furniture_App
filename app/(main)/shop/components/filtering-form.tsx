"use client"
import { CATEGORY_KEYS } from "@/config"
import { CategoriesTypeResponse } from "@/types/categories"
import { Accordion } from "@mantine/core"
import { Dispatch, SetStateAction } from "react"
import { FiFilter } from "react-icons/fi"

type Props = {
  categories: CategoriesTypeResponse[]
  setChoice: Dispatch<SetStateAction<(typeof CATEGORY_KEYS)[number] | null>>
}
export default function FilteringForm({ categories, setChoice }: Props) {
  return (
    <div>
      <Accordion variant="">
        <Accordion.Item value="filter">
          <Accordion.Control>
            <div className="flex items-center gap-3 text-[20px] font-bold">
              <FiFilter size={25} />
              <span>Filter</span>
            </div>
          </Accordion.Control>

          <Accordion.Panel>
            <div className="p-4">
              <h1 className="text-2xl font-bold  ">Filtering By Categories</h1>
              <form className="mt-5">
                {categories.map((category) => (
                  <div
                    key={category.slug}
                    className="flex cursor-pointer gap-3  items-center"
                  >
                    <input
                      type="radio"
                      id={category.slug}
                      name="category"
                      value={category.slug}
                      onChange={() => {
                        setChoice(
                          category.slug as (typeof CATEGORY_KEYS)[number],
                        )
                      }}
                    />

                    <label htmlFor={category.slug}>{category.name}</label>
                  </div>
                ))}
              </form>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
