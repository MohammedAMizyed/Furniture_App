export default function FooterCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="my-2 flex justify-between items-center gap-2">
      <div className="text-[#ddd]">{label}</div>
      <div className="text-white">{value}</div>
    </div>
  )
}
