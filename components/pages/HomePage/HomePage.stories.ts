import type { Meta, StoryObj } from "@storybook/react";
import HomePage from "./";

const meta = {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {};
