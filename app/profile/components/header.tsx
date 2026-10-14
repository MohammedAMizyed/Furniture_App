import { MeResponse } from "@/types/auth"
import MetricCard from "./metric-card"
import {
  FaDroplet,
  FaEye,
  FaRulerVertical,
  FaWeightScale,
} from "react-icons/fa6"
type Props = {
  data: MeResponse
}
export default function Header({ data }: Props) {
  return (
    <div className="bg-[#0b0f19]">
      <div className="glass-card rounded-3xl p-6 lg:p-8 mb-8 relative overflow-hidden glow-effect">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center text-center sm:text-left lg:text-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-70 blur group-hover:opacity-100 transition duration-500" />

              <img
                src={data.image}
                alt={`${data.firstName} ${data.lastName}`}
                className="relative w-36 h-36 lg:w-44 lg:h-44 object-cover rounded-2xl border-2 border-white/20 shadow-2xl bg-slate-800"
              />
              <div className="absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs font-mono text-cyan-400 shadow-md">
                ID: {String(data.id).padStart(2, "0")}
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
                SYSTEM {data.role.toUpperCase()}
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                {data.firstName} {data.lastName}
              </h2>
              <p className="text-slate-400 text-sm font-mono mt-1">
                @{data.username} &bull; {data.email}
              </p>
              <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-2 mt-3 text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-md glass-panel">
                  {/* <FontAwesomeIcon icon={faCakeCandles} className="text-cyan-400 mr-1.5" /> */}
                  {data.birthDate} ({data.age} yrs)
                </span>
                <span className="px-2.5 py-1 rounded-md glass-panel">
                  {/* <FontAwesomeIcon icon={faVenus} className="text-pink-400 mr-1.5" /> */}
                  {data.gender}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <MetricCard
              icon={FaDroplet}
              iconColor="text-red-400"
              label="Blood Group"
              value={data.bloodGroup}
              sub="Universal Donor type"
            />
            <MetricCard
              icon={FaRulerVertical}
              iconColor="text-cyan-400"
              label="Height"
              value={`${data.height} cm`}
              sub="Anatomical Height"
            />
            <MetricCard
              icon={FaWeightScale}
              iconColor="text-emerald-400"
              label="Weight"
              value={`${data.weight} kg`}
              sub="Body Mass"
            />
            <MetricCard
              icon={FaEye}
              iconColor="text-emerald-400"
              label="Eye Color"
              value={data.eyeColor}
              sub={`Hair: ${data.hair.color} ${data.hair.type}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
