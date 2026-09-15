import LandingPages from "../components/layout/landing"
import locationIcon from "../../public/location.svg"
import phoneIcon from "../../public/phone.svg"
import timeIcon from "../../public/timeIcon.svg"
import Image from "next/image"
export default function ContactPage() {
  const locations = [
    {
      id: 0,
      icon: locationIcon,
      title: "Address",
      description: "236 5th SE Avenue, New York NY10000, United States",
    },
    {
      id: 1,
      icon: phoneIcon,
      title: "Phone",
      description: `Mobile: +(84) 546-6789
Hotline: +(84) 456-6789`,
    },
    {
      id: 2,
      icon: timeIcon,
      title: "Working Time",
      description: `Monday-Friday: 9:00 - 22:00
Saturday-Sunday: 9:00 - 21:00`,
    },
  ]
  return (
    <>
      <LandingPages />
      <div className="">
        <div className="my-20 text-center m-auto max-w-[700px]">
          <h1 className="text-[36px] font-semibold">Get In Touch With Us</h1>
          <p className="text-center text-[16px] font-normal text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="container flex justify-center items-center gap-10">
          <div>
            {locations.map((item) => {
              return (
                <div
                  className="flex my-5 justify-start gap-5 items-start"
                  key={item.id}
                >
                  <Image src={item.icon} alt="" />
                  <div>
                    <h3 className="text-[24px] font-medium">{item.title}</h3>
                    <h3 className="text-[16px] font-normal w-[212px]">
                      {item.description}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>
          <div>form</div>
        </div>
      </div>
    </>
  )
}
