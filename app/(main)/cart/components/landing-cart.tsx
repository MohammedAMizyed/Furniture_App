"use client"
import {
  Button,
  Table,
  TableCaption,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core"

import { MdDelete } from "react-icons/md"
import useCartStore from "@/stores/useCart"
import { notifications } from "@mantine/notifications"
import { Product } from "@/types/product"

export default function LandingCart() {
  const { products, delete: deleteProduct, reset } = useCartStore()
  const handleClearCart = () => {
    reset()
    notifications.show({
      title: "Clear Successfully",
      message: "your cart is Empty right know🌟",
      position: "top-center",
    })
  }
  const handleDeleteProduct = (product: Product) => {
    deleteProduct(product.id)
    notifications.show({
      title: `Delete [${product.title}] Successfully`,
      message: "",
      position: "top-center",
    })
  }
  return (
    <div className="container!">
      {products.length === 0 ? (
        <div className="flex justify-center items-center h-70 text-3xl font-bold">
          Your Cart Is Empty
        </div>
      ) : (
        <div className="flex flex-col-reverse sm:flex-row my-15 gap-15  justify-between">
          <div className="flex-3/7">
            <Table stickyHeaderOffset={60}>
              <TableThead className="">
                <TableTr className="">
                  <TableTh className="bg-[#F9F1E7]! text-center!">
                    Product
                  </TableTh>
                  <TableTh className="bg-[#F9F1E7]! ">Price</TableTh>
                  <TableTh className="bg-[#F9F1E7]! ">Quantity</TableTh>
                  <TableTh className="bg-[#F9F1E7]! text-center! ">
                    Subtotal
                  </TableTh>
                </TableTr>
              </TableThead>
              {products.map((item) => {
                return (
                  <TableTbody key={item.id}>
                    <TableTr>
                      <TableTd>
                        <div className="flex gap-2 items-center items-center">
                          <img
                            className="w-[111px] h-[90px] bg-[#F9F1E7]"
                            src={item.images[0]}
                            alt=""
                          />
                          <h4 className="text-[#9F9F9F]">{item.title}</h4>
                        </div>
                      </TableTd>
                      <TableTd className="text-[#9F9F9F]!">
                        {item.price} <span className="text-green-600">$</span>
                      </TableTd>
                      <TableTd>{item.price}</TableTd>
                      <TableTd>
                        <div className="flex  justify-between items-center gap-2">
                          <span> {item.sku}</span>

                          <div
                            onClick={() => {
                              handleDeleteProduct(item)
                            }}
                          >
                            <MdDelete
                              className="cursor-pointer!"
                              color="#B88E2F"
                              size={22}
                            />
                          </div>
                        </div>
                      </TableTd>
                    </TableTr>
                  </TableTbody>
                )
              })}

              <TableCaption>
                <Button
                  onClick={handleClearCart}
                  className={"text-red-700! hover:bg-red-300!"}
                  variant="subtle"
                >
                  Clear Cart
                </Button>
              </TableCaption>
            </Table>
          </div>
          <div className="flex-1/7 bg-[#F9F1E7] p-5 ">
            <h1 className=" mb-5 text-[32px] font-bold">Cart Totals</h1>

            <div className="my-3 flex justify-between items-center gap-2">
              <h4 className="text-[16px] font-medium">Subtotal</h4>
              <span className="text-[16px] font-normal text-[#9F9F9F]">
                Rs.{" "}
                {products
                  .reduce((total, item) => total + item.price * 1, 0)
                  .toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
              </span>
            </div>
            <div className="my-3 flex justify-between items-center gap-2">
              <h4 className="text-[16px] font-medium">Total</h4>
              <div className="text-[#B88E2F] text-[20px] font-medium">
                {products
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
                $
              </div>
            </div>
            <Button
              variant="outline"
              className="border-black! my-5 w-full!"
              c={"black"}
            >
              Check Out
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
