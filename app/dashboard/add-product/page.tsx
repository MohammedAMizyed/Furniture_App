import AddProductForm from "./components/add-product-forn"

export default function page() {
  return (
    <div className="flex justify-center items-center   h-screen ">
      <div className="p-10 bg-[#F9F1E7] rounded-2xl">
        <h1 className="text-3xl font-bold mb-5 text-[#696969]">
          Add A New Product
        </h1>
        <AddProductForm />
      </div>
    </div>
  )
}
