import { authServices } from "@/services/auth"
import { Register } from "@/types/auth"
import { useMutation } from "@tanstack/react-query"

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: Register) => authServices.register(data),
  })
}
