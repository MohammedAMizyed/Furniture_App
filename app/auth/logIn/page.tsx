import Image from "next/image"
import bgImg from "../../../public/loginBg.png"
import LogInForm from "./components/logInForm"
import { Button } from "@mantine/core"
import { FaHome } from "react-icons/fa"
import Link from "next/link"

export default function LogIn() {
  return (
    <div className=" h-screen overflow-hidden bg-[#F9F8F6] flex items-center justify-center">
      <div className="container mx-auto px-5">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative shadow-xl rounded-2xl overflow-hidden flex items-stretch">
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
              <LogInForm />
            </div>

            <div className="basis-1/2 relative">
              <Image src={bgImg} alt="Login" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
