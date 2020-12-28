import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, P } from './Container';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<P> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  caption: 'normal',
  color: 'normal',
};

export const Warn = Template.bind({});
Warn.args = {
  caption: 'warn',
  color: 'warn',
};

export const Danger = Template.bind({});
Danger.args = {
  caption: 'danger',
  color: 'danger',
};
