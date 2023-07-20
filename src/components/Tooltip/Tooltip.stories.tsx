import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from ".";
import { Button } from "../index";

const meta = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "base",
    position: "top",
    open: false,
    label: "Tooltip",
    children: <Button>Hover me</Button>,
  },
  decorators: [
    (Story) => (
      <div className="py-10 px-20">
        <Story />
      </div>
    ),
  ],
};
