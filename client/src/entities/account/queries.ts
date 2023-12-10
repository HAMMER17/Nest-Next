import { accountControllerGetAccount, accountControllerPacthAccount } from "@/shared/api/generate"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const accountKey: any = ['account']

export function useAccountQuery() {
  return useQuery({
    queryKey: accountKey,
    queryFn: accountControllerGetAccount
  })
}
export function useUpdateAccount() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: accountControllerPacthAccount,
    async onSettled() {
      await queryClient.invalidateQueries(accountKey)
    },
  })
}