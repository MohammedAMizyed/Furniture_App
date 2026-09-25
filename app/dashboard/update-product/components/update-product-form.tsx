"use client"
import { useUpdateProduct } from "@/hooks/useUpdateProduct"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, TextInput } from "@mantine/core"
import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import z from "zod"

export default function UpdateProductForm() {
  const [successMessage, setSuccessMessage] = useState<string | null>("")
  const formSchema = z.object({
    title: z.string().min(1, "The Title must be at least 3 characters"),
    price: z.string().min(1, "The Price must be at least 2 characters"),
  })
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  })
  type formSchemaType = z.infer<typeof formSchema>
  const { mutate, isPending } = useUpdateProduct()

  const onSubmit: SubmitHandler<formSchemaType> = (data) => {
    mutate(data, {
      onSuccess() {
        setSuccessMessage("Update Successfully")
      },
      onError(error) {
        console.error("Error:", error)
      },
    })

    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          classNames={{
            input: "my-2! rounded-none! border-none! border-b-2!  ",
            label: " ",
          }}
          label="New Title"
          placeholder="Enter the new title"
          {...register("title")}
        />
        {errors.title && (
          <span className="text-red-700 text-[13px]">
            {errors.title.message}
          </span>
        )}{" "}
        <TextInput
          classNames={{
            input: "my-2! rounded-none! border-none! border-b-2!  ",
            label: " ",
          }}
          label="New Price"
          placeholder="Enter the new price"
          {...register("price")}
        />
        {errors.price && (
          <span className="text-red-700 text-[13px]">
            {errors.price.message}
          </span>
        )}
        <div className="flex gap-2 my-3">
          <Button variant="filled" type="submit">
            Edit
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
    </div>
  )
}
