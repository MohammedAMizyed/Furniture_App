import { categoriesServices } from "@/services/categories"
import Image from "next/image"
import furnitureImg from "../../../../public/bedroom.svg"
import kitchenImg from "../../../../public/dining.svg"
import decorationImg from "../../../../public/living.svg"
export default async function Categories() {
  const categoriesImages: Record<string, typeof furnitureImg> = {
    furniture: furnitureImg,
    "home-decoration": decorationImg,
    "kitchen-accessories": kitchenImg,
  }
  const categoriesData = await categoriesServices.get()

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
                  src={categoriesImages[item.slug]}
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
