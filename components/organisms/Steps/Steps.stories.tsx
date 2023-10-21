import type { Meta, StoryObj } from "@storybook/react";
import Steps from "./Steps";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  //   tags: ["autodocs"],
  title: "Templates/Steps",
  component: Steps,
  args: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // intent: {
    //   control: { type: "select" },
    //   options: buttonIntents,
    // },
    // size: {
    //   control: { type: "select" },
    //   options: buttonSizes,
    // },
  },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <Steps {...args} />;
  },
};
