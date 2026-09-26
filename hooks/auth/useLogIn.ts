import { authServices } from "@/services/auth"
import { LogIn } from "@/types/auth"
import { useMutation } from "@tanstack/react-query"

export const useLogIn = () => {
  return useMutation({
    mutationFn: (data: LogIn) => authServices.login(data),
  })
}
