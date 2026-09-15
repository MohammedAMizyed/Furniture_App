import Image from "next/image"
import keyLogin from "../../../../public/keyforlogin.png"
import { Button, TextInput } from "@mantine/core"
export default function LogInForm() {
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
      <form>
        <TextInput
          classNames={{
            label: "",
            input: "border-b-2! rounded-none! my-2 border-[#ddd]! border-black",
          }}
          className="my-5"
          variant=""
          size="md"
          label="User Name"
          placeholder="Enter Your Name"
        />
        <TextInput
          classNames={{
            label: "",
            input: "border-b-2! rounded-none! my-2 border-[#ddd]! border-black",
          }}
          className="my-5"
          variant=""
          size="md"
          radius="sm"
          label="Password"
          placeholder="Enter Your Password"
        />
        <Button type="submit" color="#B88E2F" variant={"filled"} w={"100%"}>
          Log In
        </Button>
        <div>
          <h3 className="my-2  cursor-pointer font-medium text-[#B88E2F]">
            Forget My Password?
          </h3>
          <h4 className="text-center">
            Don&apos;t have an account?
            <span className=" cursor-pointer font-bold text-[#B88E2F]">
              {" "}
              Create New Account
            </span>
          </h4>
        </div>
      </form>
    </div>
  )
}
