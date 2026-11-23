import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from './button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
  args: { children: 'Continue' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Add item">+</Button>
      <Button size="icon-xs" aria-label="Add small item">+</Button>
      <Button size="icon-sm" aria-label="Add medium item">+</Button>
      <Button size="icon-lg" aria-label="Add large item">+</Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: { children: 'Unavailable', disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Unavailable' })).toBeDisabled()
  },
}

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Continue' })
    await expect(getComputedStyle(button).backgroundImage).toContain('linear-gradient')
  },
}
