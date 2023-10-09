import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("max-w-[1152px] w-full px-4 mx-auto", className)}>
      {children}
    </div>
  )
}
