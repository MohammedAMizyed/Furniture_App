import {
  Button,
  Group,
  HoverCard,
  HoverCardDropdown,
  HoverCardTarget,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Text,
} from "@mantine/core"

import Image from "next/image"
import Link from "next/link"
import { FiList } from "react-icons/fi"
import profileIcon from "../../../public/profile icon.svg"
import searchIcon from "../../../public/search.svg"
import loveIcon from "../../../public/love icon.svg"
import cartIcon from "../../../public/ant-design_shopping-cart-outlined.svg"
export default function MenuHeader() {
  const links = [
    { id: 0, title: "Home" },
    { id: 1, title: "Shop" },
    { id: 2, title: "About" },
    { id: 3, title: "Contact" },
  ]
  const icons = [
    { id: 1, srcImg: searchIcon, title: "search", path: "/shop" },
    { id: 2, srcImg: loveIcon, title: "love", path: "/favorite" },
    { id: 3, srcImg: cartIcon, title: "cart", path: "/cart" },
  ]
  return (
    <Menu shadow="md" width={200}>
      <MenuTarget>
        <div className="cursor-pointer mx-2">
          <FiList size={25} />
        </div>
      </MenuTarget>

      <MenuDropdown>
        <MenuLabel>Application</MenuLabel>
        <MenuItem>
          <Group justify="center">
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
                  <Link className="w-full!" href={`/auth/logIn`}>
                    <Button
                      className=" flex! w-full! justify-center!"
                      color="#B88E2F"
                      variant="light"
                      w={"100%"}
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link className="w-full" href={`/auth/register`}>
                    <Button
                      color="#B88E2F"
                      className=" flex! w-full! justify-center!"
                      variant="outline"
                      w={"100%"}
                    >
                      Register
                    </Button>
                  </Link>
                </div>
              </PopoverDropdown>
            </Popover>
          </Group>
        </MenuItem>

        {icons.map((icon) => {
          return (
            <MenuItem
              className="cursor-pointer text-[16px] font-medium"
              key={icon.id}
            >
              <>
                <Link href={`${icon.path}`}>
                  <Group justify="center">
                    <HoverCard width={200} shadow="md">
                      <HoverCardTarget>
                        <Image
                          src={icon.srcImg}
                          className=" max-w-25!"
                          alt="img"
                        />
                      </HoverCardTarget>
                      <div className="hidden lg:block">
                        <HoverCardDropdown className="hidden! lg:block!">
                          <Text className="text-center" size="sm">
                            {icon.title == "search"
                              ? "Go To Search Page"
                              : icon.title == "love"
                                ? "Go To Favorite Page"
                                : icon.title == "cart"
                                  ? "Go To Cart Page"
                                  : null}
                          </Text>
                        </HoverCardDropdown>
                      </div>
                    </HoverCard>
                  </Group>
                </Link>
              </>
            </MenuItem>
          )
        })}

        <MenuDivider />
        <div className="block sm:hidden ">
          <MenuLabel>Pages</MenuLabel>
          {links.map((link) => {
            return (
              <MenuItem
                className="cursor-pointer text-[16px] font-medium"
                key={link.id}
              >
                <Link
                  href={`/${link.title == "Home" ? "/" : link.title.toLowerCase()}`}
                >
                  {link.title}
                </Link>
              </MenuItem>
            )
          })}
        </div>
      </MenuDropdown>
    </Menu>
  )
}
