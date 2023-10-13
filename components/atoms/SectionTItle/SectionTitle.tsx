import {
  sectionTitleHeadingLevels,
  sectionTitleIntents,
  sectionTitleSizes,
} from "@/constants/storiesData"
import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export type SectionTitleProps = {
  as: (typeof sectionTitleHeadingLevels)[number]
  /**
   * Is this the principal call to action on the page?
   */
  intent?: (typeof sectionTitleIntents)[number]

  className?: string
  /**
   * How large should the button be?
   */
  size?: (typeof sectionTitleSizes)[number]
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
  // intent = "semibold",
  // size = "heading-one",
  as: Element = "h1",
  children = <p>Heading goes here</p>,
  className = "",
}: SectionTitleProps) => {
  return (
    <Element
      className={twMerge(
        heading({ intent: "semibold", size: "heading-one", className })
      )}
    >
      {children}
    </Element>
  )
}

export default SectionTitle
