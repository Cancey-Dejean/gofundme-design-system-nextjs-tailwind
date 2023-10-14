import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import "../../../app/globals.css"
import Link from "next/link"
import { buttonIntents, buttonSizes } from "@/constants/storiesData"

export type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  intent?: (typeof buttonIntents)[number]

  className?: string
  linkUrl?: string
  reverseIcon?: boolean
  shadow?: boolean
  /**
   * How large should the button be?
   */
  size?: (typeof buttonSizes)[number]
  /**
   * Button contents
   */
  children?: React.ReactNode
  label?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export type NavItem = {
  label: ButtonProps["label"]
  linkUrl?: ButtonProps["linkUrl"]
  intent?: ButtonProps["intent"]
  reverseIcon?: ButtonProps["reverseIcon"]
  className?: ButtonProps["className"]
  icon?: React.ReactNode
}

const button = cva(
  "text-base flex items-center gap-[8px] justify-center border border-transparent font-bold [transition:var(--transition-base)] rounded-[96px] px-[24px] py-[12px] hover:shadow-btn",
  {
    variants: {
      intent: {
        primary: ["text-white", "bg-primary-200 hover:bg-primary-300"],
        secondary: [
          "bg-white hover:bg-primary-100",
          "rounded-[28px]",
          "text-[18px] text-primary-200",
          "shadow-btn",
        ],
        tertiary: [
          "bg-transparent hover:bg-gray-300 hover:bg-opacity-30 dark:hover:bg-white",
          "text-black dark:text-white dark:hover:text-black",
          "border-neutral-200 dark:border-white",
          "hover:shadow-none",
        ],
        "border-primary": [
          "bg-transparent hover:bg-primary-100",
          "text-primary-200",
          "border-primary-200",
          "hover:shadow-none",
        ],
        text: [
          "bg-transparent hover:bg-gray-300",
          "text-black dark:text-white",
          "text-[14px]",
          "!pl-0 hover:!pl-[16px]",
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
        small: ["h-[34px]", "py-1", "px-[8px]"],
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
  label = "Button",
  linkUrl = "",
  shadow = false,
  reverseIcon = false,
  children,
  ...props
}: ButtonProps) => {
  const content = children ? children : label

  return linkUrl !== "" ? (
    <Link
      href={linkUrl}
      className={twMerge(
        button({ intent, size, shadow, reverseIcon, className })
      )}
      {...props}
    >
      {content}
    </Link>
  ) : (
    <button
      className={twMerge(
        button({ intent, size, shadow, reverseIcon, className })
      )}
      {...props}
    >
      {content}
    </button>
  )
}
