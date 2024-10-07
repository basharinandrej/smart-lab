import {SizeButton, StateButton, TypeButton} from './enums/enums'
import {getClassNamesByTypes} from "./helpers/get-class-names-by-sizes";
import {getClassNamesBySizes} from "./helpers/get-class-names-by-types";
import {getClassNamesByStates} from "./helpers/get-class-names-by-states";

import './button.css';

export const createButton = ({
  label,
  onClick,
  size = SizeButton.Default,
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
  iconElement.insertAdjacentHTML('afterbegin', `
    <svg viewBox="0 0 24 24">
      <use href=${icon ? '#trash' : null} />
    </svg>
  `)

  label && buttonElement.insertAdjacentElement('afterbegin', paragraphElement);
  icon && buttonElement.insertAdjacentElement('afterbegin', iconElement)
  loaderElement && buttonElement.insertAdjacentElement('afterbegin', loaderElement)

  buttonElement.className = [
    'ds',
    'ds--button',

    getClassNamesByTypes(type),
    getClassNamesBySizes(size),
    getClassNamesByStates(state),
    (icon && !label) ? 'ds--button--icon-only' : '',
    (icon && label) ? 'ds--button--icon-text' : ''
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

