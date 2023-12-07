import type { Meta, StoryObj } from "@storybook/react";
import Steps from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Sections/Steps",
  component: Steps,
  args: {
    topText: "Text goes here",
    headline: "Section Title",
    cardOneTitle: "Card Title 1",
    cardOneDesc: "Lorem ipsum dolor sit amet.",
    cardTwoTitle: "Card Title 2",
    cardTwoDesc: "Nullam nisl purus, venenatis et urna vel",
    cardThreeTitle: "Card Title 3",
    cardThreeDesc: "Aliquam eget fermentum enim quis tempus.",
  },

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <Steps {...args} />
  },
};
