import { Button } from "@mantine/core"

export default function RoomsSection() {
  return (
    <section className="bg-[#FCF8F3] overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center gap-10 py-10">
          <div className="flex-1 min-w-0">
            <h1 className="text-[40px] font-bold">
              50+ Beautiful rooms inspiration
            </h1>

            <p className="text-[16px] font-medium text-[#616161]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>

            <Button
              variant="filled"
              className="rounded-none! text-[24px]! text-white! bg-[#B88E2F]! p-3 my-2!"
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
