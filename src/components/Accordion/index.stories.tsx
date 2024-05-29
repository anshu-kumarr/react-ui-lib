import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '.';

const meta: Meta<typeof Accordion> = {
  component: Accordion
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: 'Heading1',
    children: (
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi iure repellendus
        odit et ut. Asperiores amet numquam mollitia similique minima dignissimos,
        doloribus consequatur ullam dolores, quia, delectus excepturi aut fugit.
      </div>
    )
  }
};
