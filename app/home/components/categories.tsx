// "use client"
// import { useCategories } from "@/hooks/useCategoies"
import bg from "../../../public/categoryImg.svg"
import Image from "next/image"
import { categoriesApi } from "@/services/categories"
export default async function Categories() {
  //   const { data, isLoading } = useCategories()
  //   if (isLoading) {
  //     return <div className="animate-pulse">Loading...</div>
  //   }
  const categoriesData = await categoriesApi()
  return (
    <div className="container ">
      <div className="my-20 flex justify-center items-center flex-col ">
        <h1 className="text-[32px] font-bold">Browse The Range</h1>
        <h2 className="text-[20px]  font-normal text-[#666666]">
          Lorem ipsum dolor sit amet , consectetur adipiscing elit.
        </h2>
      </div>
      <div className="flex justify-center items-center gap-5">
        {categoriesData?.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <div className="max-h-[480px] max-w-[380px] overflow-hidden rounded-xl">
                <Image
                  className="h-full w-full object-cover"
                  src={bg}
                  alt="."
                />
              </div>
              <h2 className="my-5 text-[24px] font-semibold">{item.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
