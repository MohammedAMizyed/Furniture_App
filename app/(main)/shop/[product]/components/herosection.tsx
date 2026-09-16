export default function HeroSection({ name }: { name: string }) {
  return (
    <div className=" bg-[#F9F1E7] container mx-auto px-5 py-5">
      <div className="text-[24px] font-semibold text-[#9F9F9F]">
        Home <span className="text-black">{`>`}</span> Shop{" "}
        <span className="text-black"> {`>`} </span> |{" "}
        <span className="text-black">{name}</span>{" "}
      </div>
    </div>
  )
}
