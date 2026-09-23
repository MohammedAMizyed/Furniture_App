import SideBar from "./components/side-bar"

type Props = {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex gap-2 ">
      <div>
        <SideBar />
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
