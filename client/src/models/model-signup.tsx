import { authControllerSignUp } from "@/shared/api/generate"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

export function SignUpMutation() {
  const router = useRouter()
  type Inputs = {
    email: string
    password: string
  }
  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()
  const signMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push('/')
    }
  })
  return {
    register,
    HandleSubmit: handleSubmit((data) => signMutation.mutate(data))
  }
}