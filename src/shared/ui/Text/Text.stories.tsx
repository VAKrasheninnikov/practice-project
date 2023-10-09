import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Lorem",
    text: "Ipsun",
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: "Lorem",
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: "Ipsun",
};
