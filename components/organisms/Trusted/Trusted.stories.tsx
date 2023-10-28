import type { Meta, StoryObj } from "@storybook/react";
import Trusted from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Sections/Trusted",
  component: Trusted,
  args: {
    iconText: "Text Goes Here",
    headline: "Headline",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit rem in dolor sit amet consectetur.",
    btnText: "Button",
    btnLink: "/",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Trusted>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <Trusted {...args} />;
  },
};
