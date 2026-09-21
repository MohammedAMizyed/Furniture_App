"use client"
/* eslint-disable @next/next/no-img-element */
import { Product } from "@/types/product"
import { Button, Group, Text, Collapse, Box, Rating } from "@mantine/core"
import { useState } from "react"

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
            className="mb-5 hover:bg-[#F9F1E7]!  hover:text-[#616161]! duration-200!"
            onClick={() => {
              toggleSection(1)
            }}
          >
            Description
          </Button>
          <Button
            c={"black"}
            variant="subtle"
            className="mb-5 hover:bg-[#F9F1E7]! hover:text-[#616161]! duration-200!"
            onClick={() => {
              toggleSection(2)
            }}
          >
            Additional Information
          </Button>
          <Button
            c={"black"}
            className="mb-5 hover:bg-[#F9F1E7]! hover:text-[#616161]! duration-200!"
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
          <Text>
            {product.reviews.map((item, index) => {
              return (
                <div key={index}>
                  <div className="bg-[#F9F1E7] p-5 rounded-2xl m-2">
                    <div className="mb-2">
                      <h1 className="text-2xl font-black ">
                        {item.reviewerName}
                      </h1>
                      <h3 className="text-[15px] text-[#b4b0b0]">
                        {item.reviewerEmail}
                      </h3>
                    </div>
                    <p className="my-2">{item.comment}</p>

                    <div className="flex items-center gap-2">
                      rated:
                      <Rating
                        value={Math.round(Number(product?.rating ?? 0) * 2) / 2}
                        fractions={2}
                        readOnly
                      />
                    </div>
                    {/* <p>{item.date}</p> */}
                  </div>
                </div>
              )
            })}{" "}
          </Text>
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
