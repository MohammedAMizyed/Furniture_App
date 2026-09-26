"use client"
import Image from "next/image"
import keyLogin from "../../../../public/keyforlogin.png"
import { Button, TextInput } from "@mantine/core"
import z from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useLogIn } from "@/hooks/auth/useLogIn"

export default function LogInForm() {
  const formSchema = z.object({
    username: z.string().min(1, "The username must be at least 3 characters"),
    password: z.string().min(6, "The password must be at lest 6 characters"),
  })
  type formSchemaType = z.infer<typeof formSchema>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  })
  // const {data ,mutate} = useLogIn()
  const onSubmit: SubmitHandler<formSchemaType> = (data) => {
    // mutate(data,)
    console.log(data)
  }
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <Image className="w-[100px] h-[100px]" alt="" src={keyLogin} />
        </div>
        <h1 className="text-2xl my-5 font-black text-center">
          Log In To Your Account
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          {...register("username")}
          classNames={{
            label: "",
            input:
              "border-b-2! focus:border-[#B88E2F]! rounded-none! my-2 border-[#ddd]! border-black",
          }}
          className="mt-5"
          variant=""
          size="md"
          label="User Name"
          placeholder="Enter Your Name"
        />
        {errors.username && (
          <span className="text-red-700 text-[13px]">
            {errors.username.message}
          </span>
        )}
        <TextInput
          {...register("password")}
          classNames={{
            label: "",
            input:
              "border-b-2! focus:border-[#B88E2F]! rounded-none! my-2 border-[#ddd]! border-black",
          }}
          className="mt-5"
          variant=""
          size="md"
          radius="sm"
          label="Password"
          placeholder="Enter Your Password"
        />
        {errors.password && (
          <span className="text-red-700 text-[13px]">
            {errors.password.message}
          </span>
        )}
        <Button
          className="my-5!"
          type="submit"
          color="#B88E2F"
          variant={"filled"}
          w={"100%"}
        >
          Log In
        </Button>
        <div>
          <h3 className="my-2  cursor-pointer font-medium text-[#B88E2F]">
            Forget My Password?
          </h3>
          <h4 className="text-center">
            Don&apos;t have an account?
            <Link
              className=" cursor-pointer font-bold text-[#B88E2F]"
              href={`/auth/register`}
            >
              Create New Account
            </Link>
          </h4>
        </div>
      </form>
    </div>
  )
}
