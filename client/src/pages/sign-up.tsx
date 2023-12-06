
import UiHeader from "@/components/ui-header"
import { SignUpForm } from "@/features/ui/sign-form"

export function SignUpPage() {

  return (
    // <div className="w-full bg-black h-screen">

    <div className=" w-full  h-screen bg-black">
      <UiHeader />
      <div className="flex items-center justify-center gap-3 p-20">
        <SignUpForm />
      </div>

    </div>

    // </div>
  )
}
