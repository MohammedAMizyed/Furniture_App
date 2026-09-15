import Image from "next/image"

import logo from "../../../public/Meubel House_Logos-05.svg"
import profileIcon from "../../../public/profile icon.svg"
import searchIcon from "../../../public/search.svg"
import loveIcon from "../../../public/love icon.svg"
import cartIcon from "../../../public/ant-design_shopping-cart-outlined.svg"
import Link from "next/link"
import {
  Button,
  Group,
  HoverCard,
  HoverCardDropdown,
  HoverCardTarget,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Text,
} from "@mantine/core"
export default function Header() {
  const links = [
    { id: 0, title: "Home" },
    { id: 1, title: "Shop" },
    { id: 2, title: "About" },
    { id: 3, title: "Contact" },
  ]
  const icons = [
    { id: 1, srcImg: searchIcon, title: "search" },
    { id: 2, srcImg: loveIcon, title: "love" },
    { id: 3, srcImg: cartIcon, title: "cart" },
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
          <Popover width={200} position="bottom" withArrow shadow="md">
            <PopoverTarget>
              <div
                className="cursor-pointer text-[16px] font-medium"
                key={"00"}
              >
                <Image src={profileIcon} alt="img" />
              </div>
            </PopoverTarget>
            <PopoverDropdown>
              <div className="flex flex-col justify-start items-start gap-2">
                <Link href={`/auth/logIn`}>
                  <Button
                    className=" flex!"
                    color="#B88E2F"
                    variant="light"
                    w={"100%"}
                  >
                    Log In
                  </Button>
                </Link>
                <Link href={`/auth/register`}>
                  <Button
                    color="#B88E2F"
                    className=" flex!"
                    variant="outline"
                    w={"100%"}
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </PopoverDropdown>
          </Popover>

          {icons.map((icon) => {
            return (
              <div
                className="cursor-pointer text-[16px] font-medium"
                key={icon.id}
              >
                <>
                  <Group justify="center">
                    <HoverCard width={200} shadow="md">
                      <HoverCardTarget>
                        <Image src={icon.srcImg} alt="img" />
                      </HoverCardTarget>
                      <HoverCardDropdown>
                        <Text className="text-center" size="sm">
                          {icon.title == "search"
                            ? "Go To Search Page"
                            : icon.title == "love"
                              ? "Go To Love Page"
                              : icon.title == "cart"
                                ? "Go To Cart Page"
                                : null}
                        </Text>
                      </HoverCardDropdown>
                    </HoverCard>
                  </Group>
                </>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
