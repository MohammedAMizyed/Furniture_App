import api from "./api"

export const cartServices = {
  get: async () => {
    const response = await api.get("/carts/user/1")
    return response.data
  },
}
