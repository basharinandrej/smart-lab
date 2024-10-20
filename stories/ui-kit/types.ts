import {ArgTypes} from '@storybook/html'
import type {StoryObj} from '@storybook/html';

export type Controls<T> = Partial<ArgTypes<T>>
export type Story = StoryObj<{}>;
