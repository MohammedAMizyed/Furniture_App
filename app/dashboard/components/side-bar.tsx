import { FaRegEdit } from "react-icons/fa"
import { IoIosAddCircleOutline } from "react-icons/io"

export default function SideBar() {
  const SideBar = [
    { id: 0, title: "Add Product", icon: <IoIosAddCircleOutline size={24} /> },
    { id: 1, title: "Edit Product", icon: <FaRegEdit size={24} /> },
  ]
  return (
    <div className="h-screen shadow-2xl bg-[#F9F1E7] w-55">
      <div className="flex justify-center py-4 flex-col items-center gap-5">
        {SideBar.map((item) => {
          return (
            <div
              key={item.id}
              className=" text-black! py-5  flex! justify-center! gap-2! items-center! hover:bg-[#ddd] duration-200 cursor-pointer text-[18px] font-bold! w-full  "
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
