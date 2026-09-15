import Image from "next/image"
import bgImg from "../../../public/loginBg.png"
import LogInForm from "./components/logInForm"

export default function LogIn() {
  return (
    <div className="h-screen overflow-hidden bg-[#F9F8F6] flex items-center justify-center">
      <div className="container mx-auto px-5">
        <div className="max-w-[1000px] mx-auto">
          <div className="shadow-xl rounded-2xl overflow-hidden flex items-stretch">
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
