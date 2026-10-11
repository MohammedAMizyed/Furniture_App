import Link from "next/link"
import { FaRegEdit } from "react-icons/fa"
import { IoIosAddCircleOutline } from "react-icons/io"

import { IoExit } from "react-icons/io5"
export default function SideBar() {
  const SideBar = [
    {
      id: 0,
      title: "Add Product",
      path: "/dashboard/add-product",
      icon: <IoIosAddCircleOutline size={24} />,
    },
    {
      id: 1,
      title: "Edit Product",
      path: "/dashboard/update-product",
      icon: <FaRegEdit size={24} />,
    },
    {
      id: 2,
      title: "Exit",
      path: "/",
      icon: <IoExit size={24} />,
    },
  ]
  return (
    <div className="h-screen shadow-2xl bg-[#F9F1E7] w-55">
      <div className="flex justify-center py-4 flex-col items-center gap-5">
        {SideBar.map((item) => {
          return (
            <Link
              className=" text-black! py-5  gap-2! items-center! hover:bg-[#ddd] duration-200 cursor-pointer text-[18px] font-bold! w-full  "
              key={item.id}
              href={item.path}
            >
              <div className="flex! justify-center! ">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
