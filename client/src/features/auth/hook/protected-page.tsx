import { UiSpinner } from "@/components/ui-spinner";
import { authControllerGetSession } from "@/shared/api/generate";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function ProtectedPage<P>(Component: (props: P) => ReactElement) {
  return function Protected(props: PropsWithChildren<P>) {
    const router = useRouter()
    const { isError, isLoading } = useQuery({
      queryKey: ['session'],
      queryFn: authControllerGetSession,
      retry: 0,
      staleTime: 5 * 60 * 1000
    })
    if (isLoading) {
      return <UiSpinner />
    }
    if (isError) {
      router.replace('/signin')
    }
    return <Component {...props} />
  }
}