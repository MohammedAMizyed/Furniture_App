"use client"
import { Button, TextInput } from "@mantine/core"
import { z } from "zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAddProduct } from "@/hooks/useAddProduct"
import { useState } from "react"

export default function AddProductForm() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    price: z.string().min(1, "Please enter a valid number"),
    description: z.string().min(3, "Description must be at least 3 characters"),
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  })

  type formSchemaType = z.infer<typeof formSchema>
  const { mutate, isPending } = useAddProduct()
  const onSubmit: SubmitHandler<formSchemaType> = (data) => {
    mutate(
      {
        description: data.description,
        price: data.price,
        name: data.name,
      },
      {
        onSuccess() {
          setSuccessMessage("Add Successfully")
        },
        onError(error) {
          console.error("Error:", error)
        },
      },
    )
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register("name")}
        classNames={{
          input: "my-2! rounded-none! border-none! border-b-2!  ",
          label: " ",
        }}
        label="Name Of Product"
        placeholder="Enter the name of product"
      />{" "}
      {errors.name && (
        <span className="text-red-700 text-[13px]">{errors.name.message}</span>
      )}
      <TextInput
        {...register("price")}
        classNames={{
          input: "my-2! rounded-none! border-none! border-b-2!  ",
          label: " ",
        }}
        label="Price"
        placeholder="Enter the price"
      />{" "}
      {errors.price && (
        <span className="text-red-700 text-[13px]">{errors.price.message}</span>
      )}
      <TextInput
        {...register("description")}
        classNames={{
          input: "my-2! rounded-none! border-none! border-b-2!  ",
          label: " ",
        }}
        label="Description for product"
        placeholder="Enter the description"
      />
      {errors.description && (
        <span className="text-red-700 text-[13px]">
          {errors.description.message}
        </span>
      )}
      <div className="flex gap-2 my-3">
        <Button variant="filled" type="submit">
          Save
        </Button>
        <Button
          onClick={() => {
            reset()
          }}
          variant="white"
        >
          Delete
        </Button>
      </div>
      {successMessage && (
        <div className="text-green-700 font-bold text-xl text-center">
          {successMessage}
        </div>
      )}
      {isPending && (
        <p className="animate-pulse text-center text-xl font-bold">
          Loading...
        </p>
      )}
    </form>
  )
}
