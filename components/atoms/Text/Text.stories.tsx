import type { Meta, StoryObj } from "@storybook/react"
import {
  TextHeadingLevels,
  TextIntents,
  TextSizes,
} from "../../../constants/storiesData"
import Text from "./Text"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Design System/Typography",
  component: Text,
  args: {
    as: "h1",
    intent: "semibold",
    size: "heading-one",
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
      options: TextHeadingLevels,
    },
    intent: {
      control: { type: "select" },
      options: TextIntents,
    },
    size: {
      control: { type: "select" },
      options: TextSizes,
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Typography: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-3">
        <Text {...args} />
      </div>
    )
  },
}