import { SignOutMutation } from "@/models/model-signout"

export default function UiButtonOut({ clname, click }: any) {

  const { signOut } = SignOutMutation()
  return (
    <div>
      <button type='submit' className={clname} onClick={() => signOut({})}>{click}</button>
    </div>
  )
}