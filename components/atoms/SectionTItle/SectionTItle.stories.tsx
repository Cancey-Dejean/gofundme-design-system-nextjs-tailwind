import type { Meta, StoryObj } from "@storybook/react"
import {
  buttonIntents,
  buttonSizes,
  sectionTitleHeadingLevels,
  sectionTitleIntents,
  sectionTitleSizes,
} from "../../../constants/storiesData"
import SectionTitle from "./SectionTitle"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Typography/Heading",
  component: SectionTitle,
  args: {
    // size: "base",
    // intent: "primary",
    // reverseIcon: false,
    // linkUrl: "",
    // className: "",
    // label: "Button",
    // shadow: false,
    // onClick: () => {
    //   console.log("clicked")
    // },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      control: { type: "select" },
      options: sectionTitleHeadingLevels,
    },
    intent: {
      control: { type: "select" },
      options: sectionTitleIntents,
    },
    size: {
      control: { type: "select" },
      options: sectionTitleSizes,
    },
  },
} satisfies Meta<typeof SectionTitle>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DisplayOne: Story = {
  render: (args) => {
    return <SectionTitle {...args} />
  },
}
