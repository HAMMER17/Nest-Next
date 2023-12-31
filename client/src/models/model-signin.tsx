import { authControllerSignIn } from "@/shared/api/generate"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

export function SingInMutation() {
  const router = useRouter()
  type Inputs = {
    email: string
    password: string
  }
  const { register, handleSubmit, } = useForm<Inputs>()
  const signMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push('/')
    }
  })
  const errorMessage = signMutation.error ? "Ошибка входа" : undefined;
  return {
    register,
    HandleSubmit: handleSubmit((data) => signMutation.mutate(data)),
    errorMessage
  }
}