import { ReactNode } from "react"

export default function HeroSection({ title }: { title: string | ReactNode }) {
  return (
    <div className=" bg-[#F9F1E7] container mx-auto px-5 py-5 flex items-center">
      <div className="text-[24px] font-semibold text-[#9F9F9F]">
        Home <span className="text-black">{`>`}</span> Shop{" "}
        <span className="text-black"> {`>`} </span> |{" "}
        <span className="text-black inline-block">{title}</span>{" "}
      </div>
    </div>
  )
}
