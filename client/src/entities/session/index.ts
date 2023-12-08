import { authControllerGetSession } from "@/shared/api/generate";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const sessionKey: any = ['session']

export function useSessionQuery() {
  return useQuery({
    queryKey: sessionKey,
    queryFn: authControllerGetSession,
    retry: 0,
    staleTime: 5 * 60 * 1000
  })
}
export function useResetQuery() {
  const queryClient = useQueryClient()
  return () => queryClient.removeQueries(sessionKey)
}