"use client"
import { useState } from "react"
import Products from "./products"
import SearchInput from "./search-input"

export default function Filtering() {
  const [search, setSearch] = useState<string>("")

  return (
    <div>
      <div className=" bg-[#F9F1E7] container mx-auto px-5">
        <div className="py-5 flex gap-5 justify-start items-start">
          <div className="flex-1 my-2">
            <SearchInput setSearch={setSearch} />
          </div>
        </div>
      </div>

      <Products search={search} />
    </div>
  )
}
