import { authControllerSignOut } from "@/shared/api/generate"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"


export function SignOutMutation() {
  const sessionKey: any = ['session']
  const queryClient = useQueryClient()
  const router = useRouter()
  const signMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      await router.push('/signin')
      queryClient.removeQueries(sessionKey)
    }
  })
  return {
    signOut: signMutation.mutate
  }
}