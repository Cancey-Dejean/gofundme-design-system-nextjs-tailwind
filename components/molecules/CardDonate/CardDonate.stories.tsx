import type { Meta, StoryObj } from "@storybook/react";
import CardDonate from "./CardDonate";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/Cards/CardDonate",
  component: CardDonate,
  args: {
    imgSrc: "http://dummyimage.com/560x312.png/ff4444/ffffff",
    link: "/",
    tagName: "Tag Name",
    title: "Title",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nihil.",
    raisedAmount: 1,
    numOfDonors: 1,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CardDonate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  render: (args) => {
    return <CardDonate {...args} />;
  },
};

// export const BaseWithNoExcerpt: Story = {
//   render: (args) => {
//     args = {
//       excerpt: "",
//     };
//     return <CardCause {...args} />;
//   },
// };

// export const Featured: Story = {
//   render: (args) => {
//     args = {
//       featured: true,
//     };
//     return <CardCause {...args} />;
//   },
// };

// export const FeaturedNoExcerpt: Story = {
//   render: (args) => {
//     args = {
//       featured: true,
//       excerpt: "",
//     };
//     return <CardCause {...args} />;
//   },
// };
