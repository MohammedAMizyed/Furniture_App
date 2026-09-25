import UpdateProductForm from "./components/update-product-form"

export default function page() {
  return (
    <div className="flex justify-center items-center   h-screen ">
      <div className="p-10 bg-[#F9F1E7] rounded-2xl">
        <h1 className="text-3xl font-bold mb-5 text-[#696969]">
          Edit The Product
        </h1>
        <UpdateProductForm />
      </div>
    </div>
  )
}
