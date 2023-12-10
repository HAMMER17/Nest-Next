import { useAccountQuery, useUpdateAccount } from "@/entities/account"

export function toggleBlock() {
  const accoutQuery = useAccountQuery()
  const updateAccount: any = useUpdateAccount()

  const toggleBlocking = () => {
    if (accoutQuery.data) {
      updateAccount.mutate({
        isBlock: !accoutQuery.data?.isBlock,
      })
    }
  }
  return {
    isLoading: accoutQuery.isLoading, toggleBlocking,
    isBlock: accoutQuery.data?.isBlock ?? false,
    isReady: accoutQuery.isSuccess
  }
}