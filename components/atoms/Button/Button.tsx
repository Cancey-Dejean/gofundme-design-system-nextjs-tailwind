import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import "../../../app/globals.css"
import Link from "next/link"

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  intent?: "primary" | "secondary" | "tertiary" | "border" | "text" | "navText"
  className?: string
  linkUrl?: string
  linkable?: boolean
  reverseIcon?: boolean
  shadow?: boolean
  /**
   * How large should the button be?
   */
  size?: "base" | "small" | "large"
  /**
   * Button contents
   */
  children?: React.ReactNode
  /**
   * Optional click handler
   */
  onClick?: () => void
}

const button = cva(
  "text-base flex items-center gap-[8px] justify-center border border-transparent font-bold [transition:var(--transition-base)] rounded-[96px] px-[24px] py-[12px] hover:shadow-btn [&_svg]:w-[24px]",
  {
    variants: {
      intent: {
        primary: ["text-white", "bg-primary-200 hover:bg-primary-300"],
        secondary: [
          "bg-white hover:bg-primary-100",
          "rounded-[28px]",
          "text-[18px]",
          "shadow-btn",
        ],
        tertiary: [
          "bg-transparent hover:bg-gray-300",
          "text-black",
          "border-neutral-200",
          "hover:bg-opacity-30 hover:shadow-none",
        ],
        border: [
          "bg-transparent hover:bg-gray-300",
          "text-black",
          "border-neutral-200",
          "hover:bg-opacity-30 hover:shadow-none",
        ],
        text: [
          "bg-transparent hover:bg-gray-300",
          "text-black",
          "text-[14px]",
          "!pl-0  hover:!pl-[16px]",
          "rounded-[8px]",
          "hover:bg-opacity-30 hover:shadow-none",
        ],
        navText: [
          "bg-transparent hover:bg-gray-300",
          "text-black",
          "text-base",
          "font-normal",
          "rounded-[10px]",
          "hover:bg-opacity-30 hover:shadow-none",
        ],
      },
      size: {
        small: ["h-[34px]", "py-[4px]", "px-[16px]"],
        base: ["h-[48px]"],
        large: ["h-[56px]", "py-[8px]"],
      },
      shadow: {
        true: ["shadow-btn"],
        false: null,
      },
      reverseIcon: {
        true: ["flex-row-reverse"],
        false: null,
      },
    },
  }
)

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  className = "",
  intent = "primary",
  size = "base",
  linkable = false,
  linkUrl = "#",
  shadow = false,
  reverseIcon = false,
  children,
  ...props
}: ButtonProps) => {
  return linkable ? (
    <Link
      href={linkUrl}
      className={twMerge(
        button({ intent, size, className, shadow, reverseIcon })
      )}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      className={twMerge(
        button({ intent, size, className, shadow, reverseIcon })
      )}
      {...props}
    >
      {children}
    </button>
  )
}
