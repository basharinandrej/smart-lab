import {createSLLogo, Props} from './Sl-logo';
import type {Meta, StoryObj} from '@storybook/html';
import {PointColorSLLogo, SizeSLLogo} from './enums/enums'
import {convertMapToControl} from '../../tools/convert-map-to-control'

type Story = StoryObj<{}>;

const meta: Meta<Props> = {
  title: 'UI-KIT/SL-Logo',
  render: (props: Props) => {
    return createSLLogo(props)
  },
  args: {
    paragraph: 'SMART-LAB',
    subparagraph: 'Мы делаем деньги на бирже',
    state: PointColorSLLogo.Amber,
    size: SizeSLLogo.Medium,
  },
  argTypes: {
    state: {
      description: 'Цвет лейбла',
      ...convertMapToControl(PointColorSLLogo)
    },
    size: {
      description: 'Размер логотипа',
      ...convertMapToControl(SizeSLLogo)
    },
    paragraph: {
      description: 'Текст логотипа',
    },
    subparagraph: {
      description: 'Подтекст логотипа',
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Отображение элемента “Предупреждение” чтобы привлечь внимание пользователя.'
      },
    },
  },
}

export default meta;

export const Primary: Story = {
  args: {},
};

