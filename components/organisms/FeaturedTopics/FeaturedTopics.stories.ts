import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import FeaturedTopics from "./FeaturedTopics";

const meta = {
  title: "Templates/FeaturedTopics",
  component: FeaturedTopics,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof FeaturedTopics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {};
