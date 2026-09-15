import hight from "../../../public/trophy 1.svg"
import freeShop from "../../../public/free shipping.svg"
import support from "../../../public/support.svg"
import chick from "../../../public/chick.svg"
import Image from "next/image"
export default function Advantages() {
  const advantages = [
    {
      id: 0,
      img: hight,
      title: "High Quality",
      desc: "crafted from top materials",
    },
    {
      id: 1,
      img: chick,
      title: "Warranty Protection",
      desc: "Over 2 years",
    },
    {
      id: 2,
      img: freeShop,
      title: "Free Shipping",
      desc: "Order over 150 $",
    },
    {
      id: 3,
      img: support,
      title: "24 / 7 Support",
      desc: "Dedicated support",
    },
  ]
  return (
    <div className=" bg-[#FAF3EA] mt-5 py-15">
      <div className="container  flex justify-between items-center gap-10">
        {advantages.map((item) => {
          return (
            <div
              className="flex justify-center items-center gap-4"
              key={item.id}
            >
              <div>
                <Image alt={item.title} src={item.img} />
              </div>
              <div>
                <h1 className="text-[25px] font-semibold">{item.title}</h1>
                <p className="text-[20px] font-medium">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
