"use client"
import { Product } from "@/types/product"
import { useDisclosure } from "@mantine/hooks"
import { Button, Group, Text, Collapse, Box } from "@mantine/core"
import { useState } from "react"
import Image from "next/image"

type Props = {
  product: Product
}
export default function InformationProduct({ product }: Props) {
  const [open, setOpen] = useState<number | null>(1)

  const toggleSection = (section: number) => {
    setOpen((current) => (current === section ? null : section))
  }
  return (
    <div className="container">
      <Box maw={800} mx="auto" my={"30"}>
        <Group
          className="flex! items-center flex-nowrap!"
          justify="center"
          mb={5}
        >
          <Button
            c={"black"}
            variant="subtle"
            onClick={() => {
              toggleSection(1)
            }}
          >
            Description
          </Button>
          <Button
            c={"black"}
            variant="subtle"
            onClick={() => {
              toggleSection(2)
            }}
          >
            Additional Information
          </Button>
          <Button
            c={"black"}
            variant="subtle"
            onClick={() => {
              toggleSection(3)
            }}
          >
            Reviews [{product.reviews.length}]
          </Button>
        </Group>
        <Collapse
          expanded={open == 1}
          transitionDuration={100}
          transitionTimingFunction="linear"
        >
          <Text>{product.description} </Text>
        </Collapse>{" "}
        <Collapse
          expanded={open == 2}
          transitionDuration={100}
          transitionTimingFunction="linear"
        >
          <Text>
            {product.warrantyInformation}
            {product.shippingInformation}
          </Text>
        </Collapse>{" "}
        <Collapse
          expanded={open == 3}
          transitionDuration={100}
          transitionTimingFunction="linear"
        >
          <Text>{product.description} </Text>
        </Collapse>
      </Box>
      <div className="flex justify-center gap-10 items-center p-5">
        <div className=" flex-1/2 rounded-2xl overflow-hidden w-full max-w-[500px] h-full ">
          <img
            className="object-cover bg-[#F9F1E7]"
            src={product?.images[1]}
            alt=""
          />
        </div>
        <div className=" flex-1/2 rounded-2xl overflow-hidden w-full max-w-[500px]  h-full ">
          <img
            className="object-cover bg-[#F9F1E7]"
            src={product?.images[2]}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
