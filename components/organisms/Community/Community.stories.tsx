import type { Meta, StoryObj } from "@storybook/react";
import Community from "./Community";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  //   tags: ["autodocs"],
  title: "Templates/Community",
  component: Community,
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
} satisfies Meta<typeof Community>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <Community {...args} />;
  },
};
