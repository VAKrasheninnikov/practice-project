import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/Loginform',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [StoreDecorator({ login: { username: 'admin', password: '123' } })];
