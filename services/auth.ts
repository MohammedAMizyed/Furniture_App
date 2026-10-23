import axios from "axios"
import { LogIn, MeResponse, Register } from "@/types/auth"
import api from "./api"

export const authServices = {
  login: async (data: LogIn) => {
    const response = await axios.post("/api/auth/login", data)
    return response.data
  },

  register: async (data: Register) => {
    const response = await axios.post("api/auth/add", data)
    return response.data
  },

  me: async () => {
    const response = await axios.get("/api/auth/me")
    return response.data
  },
  logout: async () => {
    const response = await axios.post("/api/auth/logout")
    return response.data
  },
}
