// import {
//   sectionTitleHeadingLevels,
//   sectionTitleIntents,
//   sectionTitleSizes,
// } from "@/constants/storiesData"
import {
  sectionTitleHeadingLevels,
  sectionTitleIntents,
  sectionTitleSizes,
} from "@/types"
import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export type SectionTitleProps = {
  as: sectionTitleHeadingLevels[]
  /**
   * Is this the principal call to action on the page?
   */
  intent?: sectionTitleIntents[]

  className?: string
  /**
   * How large should the button be?
   */
  size?: sectionTitleSizes[]
  /**
   * Button contents
   */
  children: React.ReactNode
  // label?: string
}

const heading = cva("font-normal", {
  variants: {
    intent: {
      normal: ["font-normal"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
    },
    size: {
      "display-one": ["text-display-one"],
      "display-two": ["text-display-two"],
      "heading-one": ["text-heading-one"],
      "heading-two": ["text-heading-two"],
      "heading-three": ["text-heading-three"],
    },
  },
})

const SectionTitle = ({
  intent = "semibold",
  size = "heading-one",
  as = "h1",
  children = "Heading goes here",
  className = "",
}: SectionTitleProps) => {
  const Element = as
  return (
    <Element className={twMerge(heading({ intent, size, className }))}>
      {children}
    </Element>
  )
}

export default SectionTitle
