/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import { useEffect, useState } from "react"
import Products from "./products"
import SearchInput from "./search-input"
import { Box, Pagination } from "@mantine/core"
import { useProductsBySearch } from "@/hooks/useProductsBySearch"

export default function Filtering() {
  const [search, setSearch] = useState<string>("")
  const [page, setPage] = useState<number>(1)

  const {
    data: products,
    isPending: pendingSearch,
    isError: errorSearch,
    isFetched,
  } = useProductsBySearch({ q: search, limit: 10, skip: (page - 1) * 10 })
  const TotalPages = products?.total ? Math.ceil(products.total / 10) : 0
  useEffect(() => {
    setPage(1)
  }, [search])

  useEffect(() => {
    window.scrollTo({ top: 250, behavior: "smooth" })
  }, [page])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div>
      <div className=" bg-[#F9F1E7]  mx-auto px-5">
        <div className="py-5 flex gap-5 justify-start items-start">
          <div className="flex-1 my-2">
            <SearchInput setSearch={setSearch} />
          </div>
        </div>
      </div>
      <div className="container">
        <Products
          products={products ? products.products : []}
          errorSearch={errorSearch}
          pendingSearch={pendingSearch}
          isFetching={isFetched}
        />
      </div>

      <Box
        style={{
          overflow: "auto",
          minWidth: 220,
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          color="#B88E2F"
          value={page}
          onChange={setPage}
          total={TotalPages}
        />
      </Box>
    </div>
  )
}
