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
    <form className="flex justify-center  sm:justify-start items-center gap-5">
      <TextInput
        classNames={{
          input: "sm:w-[400px]! w-[250px]!",
        }}
        onChange={(e) => search(e.currentTarget.value.trim())}
        variant="unstyled"
        className="bg-white p-1 px-3 rounded-xl"
        placeholder="Search for products"
      />
    </form>
  )
}
