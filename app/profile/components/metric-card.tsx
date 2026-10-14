import { IconType } from "react-icons"

type Props = {
  icon: IconType
  iconColor: string
  label: string
  value: string | number
  sub: string
}

export default function MetricCard({
  icon: Icon,
  iconColor,
  label,
  value,
  sub,
}: Props) {
  return (
    <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
      <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">
        <Icon className={`${iconColor} mr-1 inline-block`} />
        {label}
      </div>

      <div className="text-2xl font-bold font-mono text-white">{value}</div>

      <div className="text-[10px] text-slate-500 mt-1">{sub}</div>
    </div>
  )
}
