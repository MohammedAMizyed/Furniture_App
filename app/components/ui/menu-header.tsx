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
          <FiList size={29} />
        </div>
      </MenuTarget>

      <MenuDropdown>
        <MenuLabel>Application</MenuLabel>

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
