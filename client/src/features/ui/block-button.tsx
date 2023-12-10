import { ButtonHTMLAttributes } from "react"


const BlockButton = ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div>
      <button className={className} {...props}></button>
    </div>
  )
}

export default BlockButton
