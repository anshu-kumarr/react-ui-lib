import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';
import Spinner from '../Spinner';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    kind: 'primary',
    children: 'Button'
  }
};

export const WithLoading: Story = {
  args: {
    children: 'Button',
    kind: 'primary',
    loading: true
  }
};
