import type { Meta, StoryObj } from "@storybook/react";
import GetStarted from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Sections/GetStarted",
  component: GetStarted,
  args: {
    className: "",
    imgSrc: "http://dummyimage.com/356x356.png/02a95c/ffffff",
    headline: "Headline",
    buttons: [
      {
        label: "Button",
        className: "min-w-[230px] bg-primary-300",
        intent: "primary",
        size: "large",
        linkUrl: "/",
      },
      {
        label: "Button",
        className: "min-w-[215px]",
        intent: "tertiary",
        size: "large",
        linkUrl: "/",
      },
    ],
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof GetStarted>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <GetStarted {...args} />;
  },
};
