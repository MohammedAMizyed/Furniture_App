"use client"
import { useDebouncedCallback } from "@/hooks/useDebouncedCallback"
import { TextInput } from "@mantine/core"
type Props = {
  setSearch: (q: string) => void
}
export default function SearchInput({ setSearch }: Props) {
  const search = useDebouncedCallback((q: string) => {
    setSearch(q)
  }, 500)

  return (
    <form className="flex justify-start items-center gap-5">
      <TextInput
        onChange={(e) => search(e.currentTarget.value.trim())}
        variant="unstyled"
        w={"400px"}
        className="bg-white p-1 px-3 rounded-xl"
        placeholder="Search for products"
      />
    </form>
  )
}
