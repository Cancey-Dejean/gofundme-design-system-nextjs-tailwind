import type { Meta, StoryObj } from "@storybook/react";
import CardImpact from "./CardImpact";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/Cards/CardImpact",
  component: CardImpact,
  args: {
    imgSrc: "https://dummyimage.com/158x158.png/ff4444/ffffff",
    imgAlt: "Card Icon",
    title: "Title",
    link: "/",
    ariaLabel: "Title",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CardImpact>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  render: (args) => {
    return <CardImpact {...args} />;
  },
};