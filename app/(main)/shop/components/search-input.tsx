"use client"
import { Button, TextInput } from "@mantine/core"
import { useState } from "react"
type Props = {
  search: string
  setSearch: (q: string) => void
}
export default function SearchInput({ search, setSearch }: Props) {
  const [inputValue, setInputValue] = useState<string | null>(null)
  return (
    <form className="flex justify-start items-center gap-5">
      <TextInput
        value={search}
        onChange={(e) => {
          setInputValue(e.currentTarget.value)
        }}
        variant="unstyled"
        w={"400px"}
        className="bg-white p-1 px-3 rounded-xl"
        placeholder="Search for products"
      />
      <Button
        onSubmit={() => {
          setSearch(inputValue!)
        }}
        color="#B88E2F"
        type="submit"
      >
        Search
      </Button>
    </form>
  )
}
