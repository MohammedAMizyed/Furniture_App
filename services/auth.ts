import { LogIn, LogInResponse, MeResponse, Register } from "@/types/auth"
import api from "./api"

export const authServices = {
  login: async (data: LogIn) => {
    const response = await api.post<LogInResponse>(`/auth/login`, data)
    return response.data
  },
  register: async (data: Register) => {
    const response = await api.post(`/users/add`, data)
    return response.data
  },
  me: async () => {
    const response = await api.get<MeResponse>("/auth/me")
    return response.data
  },
}
