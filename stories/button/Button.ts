import {SizeButton, StateButton, TypeButton} from './enums/enums'
import {getClassNamesByTypes} from "./helpers/get-class-names-by-sizes";
import {getClassNamesBySizes} from "./helpers/get-class-names-by-types";
import {getClassNamesByStates} from "./helpers/get-class-names-by-states";

import './button.sass';

export const createButton = ({
  label,
  onClick,
  size = SizeButton.Medium,
  type = TypeButton.Primary,
  state = StateButton.Default,
  icon
}: Props) => {
  const buttonElement = document.createElement('button');
  const paragraphElement = document.createElement('p')
  const iconElement = document.createElement('div')
  const loaderElement = document.createElement('div')

  buttonElement.type = 'button';
  buttonElement.addEventListener('click', onClick);

  paragraphElement.setAttribute('class', 'ds--button-paragraph')
  iconElement.setAttribute('class', 'ds--button-icon')
  loaderElement.setAttribute('class', 'ds--button-loader')

  paragraphElement.innerText = label
  iconElement.insertAdjacentHTML('afterbegin', icon)

  label && buttonElement.insertAdjacentElement('afterbegin', paragraphElement);
  icon && buttonElement.insertAdjacentElement('afterbegin', iconElement)
  loaderElement && buttonElement.insertAdjacentElement('afterbegin', loaderElement)

  buttonElement.className = [
    'ds--button',

    getClassNamesByTypes(type),
    getClassNamesBySizes(size),
    getClassNamesByStates(state),
  ].join(' ');


  return buttonElement;
};

export interface Props {
  label: string
  onClick: () => void
  size: SizeButton
  type: TypeButton
  state: StateButton
  icon?: string
}

