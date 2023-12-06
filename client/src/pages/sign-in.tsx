
import UiHeader from "@/components/ui-header"
import { SignInForm } from "@/features/ui/signin-form"

export function SignInPage() {

  return (
    // <div className="w-full bg-black h-screen">

    <div className=" w-full  h-screen bg-black">
      <UiHeader />
      <div className="flex items-center justify-center gap-3 p-20">
        <SignInForm />
      </div>

    </div>

    // </div>
  )
}
