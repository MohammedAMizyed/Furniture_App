import { Product } from "@/types/product"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type State = {
  products: Product[]
  add: (product: Product) => void
  delete: (id: number) => void
  reset: () => void
}

const useFavorite = create<State>()(
  persist(
    (set) => ({
      products: [],

      add: (product) =>
        set((state) => {
          const exist = state.products.some((item) => item.id === product.id)
          if (exist) return state
          return { products: [...state.products, product] }
        }),

      delete: (id) =>
        set((state) => ({
          products: state.products.filter((item) => item.id !== id),
        })),

      reset: () => set({ products: [] }),
    }),
    {
      name: "favorites", // ⬅️ المفتاح في localStorage
    },
  ),
)

export default useFavorite
