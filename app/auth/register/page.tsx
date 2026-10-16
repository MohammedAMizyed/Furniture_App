import Image from "next/image"
import bgImg from "../../../public/loginBg.png"
import RegisterForm from "./components/register-form"
import { Button } from "@mantine/core"
import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function Register() {
  return (
    <div className="h-screen overflow-hidden bg-[#F9F8F6] flex items-center justify-center">
      <div className="container mx-auto px-5">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative shadow-xl rounded-2xl overflow-hidden flex items-stretch flex-col  sm:flex-row">
            <div className="absolute top-2 left-2 ">
              <Button
                variant="light"
                className="hover:bg-[#c69d3fc9]! bg-[#b88f2fe1]! text-white!"
              >
                <Link
                  href={`/`}
                  className="flex! justify-center! items-center! gap-1"
                >
                  <FaHome size={20} />
                  <span>Home</span>
                </Link>
              </Button>
            </div>
            <div className="basis-1/2 bg-white p-10">
              <RegisterForm />
            </div>

            <div className="basis-1/2 relative min-h-[110px] sm:min-h-[0px]">
              <Image src={bgImg} alt="Login" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
