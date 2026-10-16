import { SiSphinx } from "react-icons/si"
import FooterCard from "./footer-card"
import { MeResponse } from "@/types/auth"

type Props = {
  data: MeResponse
}
export default function Footer({ data }: Props) {
  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-1">
          <SiSphinx color="white" />

          <h1 className="font-bold text-white">Physical Traits</h1>
        </div>
      </div>
      <FooterCard
        label="Hair Style"
        value={`${data.hair.type}, ${data.hair.color}  `}
      />
      <FooterCard label="Eye Color" value={`${data.eyeColor} `} />
      <FooterCard label="Blood Type" value={`${data.bloodGroup} `} />
      <FooterCard label="BMI Index" value={`16.9 (Lean) `} />
    </div>
  )
}
