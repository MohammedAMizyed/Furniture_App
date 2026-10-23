import { Product } from "@/types/product"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartState = {
  products: Product[]
  add: (product: Product) => void
  delete: (id: number) => void
  reset: () => void
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      products: [],

      add: (product) =>
        set((state) => {
          const exists = state.products.some((p) => p.id === product.id)

          if (exists) return state

          return {
            products: [...state.products, product],
          }
        }),

      delete: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),

      reset: () => set({ products: [] }),
    }),
    {
      name: "cart",
    },
  ),
)

export default useCartStore
