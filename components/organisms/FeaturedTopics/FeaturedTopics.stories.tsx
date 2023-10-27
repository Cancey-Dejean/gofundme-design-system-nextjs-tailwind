import type { Meta, StoryObj } from "@storybook/react";
import FeaturedTopics from ".";
import { featuredCardsDefault } from "../../../constants/mockData";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Sections/FeaturedTopics",
  component: FeaturedTopics,
  args: {
    topText: "Headline goes here",
    title: "Section Title",
    featuredCards: featuredCardsDefault,
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FeaturedTopics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <FeaturedTopics {...args} />;
  },
};
