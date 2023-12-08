import { useResetQuery } from "@/entities/session"
import { authControllerSignOut } from "@/shared/api/generate"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"


export function SignOutMutation() {

  const router = useRouter()
  const useReset = useResetQuery()
  const signMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      await router.push('/signin')
      useReset()
    }
  })
  return {
    signOut: signMutation.mutate
  }
}