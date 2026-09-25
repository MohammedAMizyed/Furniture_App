import { LogIn, Register } from "@/types/auth"
import api from "./api"

export const authServices = {
  login: async (data: LogIn) => {
    const response = await api.post(`/auth/login`, data)
    return response.data
  },
  register: async (data: Register) => {
    const response = await api.post(`/users/add`, data)
    return response.data
  },
}
