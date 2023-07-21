import type { Meta, StoryObj } from "@storybook/react";
import Rating from ".";

const meta = {
  title: "Components/Rating",
  tags: ["autodocs"],
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof Rating>;

export const Base: Story = {
  args: {
    mask: "star",
    size: "md",
    name: "rating",
    onChange: (value: number) => {
      console.log(value);
    },
  },
};
