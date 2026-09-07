import Link from "next/link"

export default function Footer() {
  const links = [
    { id: 0, title: "Home" },
    { id: 1, title: "Shop" },
    { id: 2, title: "About" },
    { id: 3, title: "Contact" },
  ]
  const helps = [
    { id: 0, title: "Payment Options" },
    { id: 1, title: "Returns" },
    { id: 2, title: "Privacy Policies" },
  ]
  return (
    <div className="container mt-10 px-20 border-t-2 border-[#ddd] pt-5">
      <div className="border-b-2 border-[#ddd] pb-10 flex justify-between items-start gap-10">
        <div>
          <h1 className="text-[24px] my-3 mb-7 font-bold ">Funiro.</h1>
          <p className="max-w-[300px] text-[16px] font-normal text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables,{" "}
            <span className="block">FL 33134 USA</span>
          </p>
        </div>
        <div>
          <h2 className="my-3 mb-7 text-[#9F9F9F] text-[16px] font-medium ">
            Links
          </h2>
          <div className="flex justify-center items-start gap-7 flex-col">
            {links.map((item) => {
              return (
                <div key={item.id} className="text-[text-[16px] font-medium]">
                  <Link href={`/${item.title.toLocaleLowerCase()}`}>
                    {item.title}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <h2 className="my-3 mb-7 text-[#9F9F9F] text-[16px] font-medium ">
            Help
          </h2>
          <div className="flex justify-center items-start gap-7 flex-col">
            {helps.map((item) => {
              return (
                <div key={item.id} className="text-[text-[16px] font-medium]">
                  {item.title}
                </div>
              )
            })}
          </div>
        </div>{" "}
        <div>
          <h2 className="my-3 mb-7 text-[#9F9F9F] text-[16px] font-medium ">
            Newsletter
          </h2>
          <form>
            <input type="text" />
          </form>
        </div>
      </div>

      <h3 className="text-[16px] font-normal my-10">
        2026 furino. Mady By{" "}
        <span className="text-red-600 font-black">Mohammed A. Mizyed</span> All
        rights reverved
      </h3>
    </div>
  )
}
