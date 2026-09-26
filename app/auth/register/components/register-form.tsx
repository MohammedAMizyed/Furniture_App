"use client"
import Image from "next/image"
import keyLogin from "../../../../public/keyforlogin.png"
import { Button, TextInput } from "@mantine/core"
import z from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"

export default function RegisterForm() {
  const formSchema = z.object({
    firstName: z.string().min(1, "The firstName must be at least 3 characters"),
    secondName: z
      .string()
      .min(1, "The secondName must be at least 3 characters"),
    age: z.string().min(6, "The age must be at lest 18 year"),
  })
  type formSchemaType = z.infer<typeof formSchema>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<formSchemaType> = (data) => {
    console.log(data)
  }
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <Image className="w-[100px] h-[100px]" alt="" src={keyLogin} />
        </div>
        <h1 className="text-2xl my-3 font-black text-center">
          Create New Account
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          {...register("firstName")}
          classNames={{
            input:
              "border-b-2! focus:border-[#B88E2F]! rounded-none! my-2 border-[#ddd]! border-black",
          }}
          className="mt-2!"
          variant=""
          size="md"
          label="First Name"
          placeholder="Enter First Name"
        />{" "}
        {errors.firstName && (
          <span className="text-red-700 text-[13px]">
            {errors.firstName.message}
          </span>
        )}
        <TextInput
          {...register("secondName")}
          classNames={{
            input:
              "border-b-2! focus:border-[#B88E2F]! rounded-none! my-2 border-[#ddd]! border-black",
          }}
          className="mt-2"
          variant=""
          size="md"
          radius="sm"
          label="Second Name"
          placeholder="Enter Second Name"
        />
        {errors.secondName && (
          <span className="text-red-700 text-[13px]">
            {errors.secondName.message}
          </span>
        )}
        <TextInput
          {...register("age")}
          classNames={{
            label: "",
            input:
              "border-b-2! duration-200 focus:border-[#B88E2F]! rounded-none! my-2 border-[#ddd]! border-black",
          }}
          className="mt-2"
          variant=""
          size="md"
          radius="sm"
          label="Age"
          placeholder="Enter Your Age"
        />
        {errors.age && (
          <span className="text-red-700 text-[13px]">{errors.age.message}</span>
        )}
        <Button
          className="my-1!"
          type="submit"
          color="#B88E2F"
          variant={"filled"}
          w={"100%"}
        >
          Register
        </Button>
        <div>
          <h3 className="my-2   cursor-pointer font-medium text-[#B88E2F]">
            Forget My Password?
          </h3>
          <h4 className="text-center">
            Already have an account?
            <Link
              className=" cursor-pointer font-bold text-[#B88E2F]"
              href={`/auth/logIn`}
            >
              Log In
            </Link>
          </h4>
        </div>
        {/* {isPending && (
        <p className="animate-pulse text-center text-xl font-bold">
          Loading...
        </p>
      )} */}
      </form>
    </div>
  )
}
