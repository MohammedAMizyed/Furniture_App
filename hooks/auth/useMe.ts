import { authServices } from "@/services/auth"
import { useQuery } from "@tanstack/react-query"

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => authServices.me(),
    staleTime: 1000 * 60 * 5, // البيانات تعتبر "حديثة" لمدة 5 دقائق
    retry: 1,
  })
}
