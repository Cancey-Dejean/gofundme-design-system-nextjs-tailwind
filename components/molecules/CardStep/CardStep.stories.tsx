import type { Meta, StoryObj } from "@storybook/react";
import CardStep from "./CardStep";
import {
  StepArchOneIcon,
  StepArchOneIconMobile,
} from "../../../components/atoms/Icons/Icons";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/Cards/CardStep",
  component: CardStep,
  args: {
    number: 1,
    title: "Title",
    description: "Lorem ipsum dolor sit amet.",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CardStep>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  render: (args) => {
    return <CardStep {...args} stepImgDesktop={null} />;
  },
};

export const BaseWithStepImage: Story = {
  render: (args) => {
    return (
      <CardStep
        stepImgDesktop={<StepArchOneIcon className="-mt-4" />}
        stepImgMobile={<StepArchOneIconMobile className="ml-5" />}
        {...args}
      />
    );
  },
};
