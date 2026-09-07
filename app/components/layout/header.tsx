import Image from "next/image"

import logo from "../../../public/Meubel House_Logos-05.svg"
import profileIcon from "../../../public/profile icon.svg"
import searchIcon from "../../../public/search.svg"
import loveIcon from "../../../public/love icon.svg"
import cartIcon from "../../../public/ant-design_shopping-cart-outlined.svg"
import Link from "next/link"
export default function Header() {
  const links = [
    { id: 0, title: "Home" },
    { id: 1, title: "Shop" },
    { id: 2, title: "About" },
    { id: 3, title: "Contact" },
  ]
  const icons = [
    { id: 0, srcImg: profileIcon },
    { id: 1, srcImg: searchIcon },
    { id: 2, srcImg: loveIcon },
    { id: 3, srcImg: cartIcon },
  ]
  return (
    <div className="container">
      <div className="h-[80px] flex justify-between items-center">
        <div className="flex-1/3 cursor-pointer flex justify-start items-center gap-2">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <span className="text-[34px] font-bold ">Furniro</span>
        </div>
        <div className="flex-1/3 flex justify-center items-center gap-18.75">
          {links.map((link) => {
            return (
              <div
                className="cursor-pointer text-[16px] font-medium"
                key={link.id}
              >
                <Link
                  href={`/${link.title == "Home" ? "/" : link.title.toLowerCase()}`}
                >
                  {link.title}
                </Link>
              </div>
            )
          })}
        </div>
        <div className="flex-1/3 flex justify-end items-center gap-18.75">
          {icons.map((icon) => {
            return (
              <div
                className="cursor-pointer text-[16px] font-medium"
                key={icon.id}
              >
                <Image src={icon.srcImg} alt="img" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
