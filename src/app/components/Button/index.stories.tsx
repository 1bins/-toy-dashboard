import { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "@/app/components/Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'button'
  }
}
