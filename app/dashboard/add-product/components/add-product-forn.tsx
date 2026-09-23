import { Button, TextInput } from "@mantine/core"

export default function AddProductForm() {
  return (
    <form>
      <TextInput
        classNames={{
          input:
            "my-2! rounded-none! border-none! border-b-2! border-red-400! ",
          label: " ",
        }}
        label="Name Of Product"
        placeholder="Input placeholder"
      />{" "}
      <TextInput
        classNames={{
          input:
            "my-2! rounded-none! border-none! border-b-2! border-red-400! ",
          label: " ",
        }}
        label="Price"
        placeholder="Input placeholder"
      />{" "}
      <TextInput
        classNames={{
          input:
            "my-2! rounded-none! border-none! border-b-2! border-red-400! ",
          label: " ",
        }}
        label="Description for product"
        placeholder="Input placeholder"
      />
      <div className="flex gap-2 my-3">
        <Button variant="filled" type="submit">
          Save
        </Button>
        <Button variant="white">Delete</Button>
      </div>
    </form>
  )
}
