import {SizeButton, StateButton, TypeButton} from './enums/enums'
import {getClassNamesByTypes} from "./helpers/get-class-names-by-sizes";
import {getClassNamesBySizes} from "./helpers/get-class-names-by-types";
import {getClassNamesByStates} from "./helpers/get-class-names-by-states";

import './button.css';

export const createButton = ({
  label,
  size = SizeButton.Default,
  type = TypeButton.Primary,
  state = StateButton.Default,
  icon,
  isFull
}: Props) => {

  const classNames = [
    'ds',
    'ds--button',

    getClassNamesByTypes(type),
    getClassNamesBySizes(size),
    getClassNamesByStates(state),
    (icon && !label) ? 'ds--button--icon-only' : '',
    (icon && label) ? 'ds--button--icon-text' : '',
    isFull ? 'ds--button--full': '',
  ].join(' ');


  return `
    <button
      type="button"
      class="${classNames}"
    >
      <div class="ds--button-loader"></div>
      ${icon 
        ? `<div class="ds--button-icon">
            <svg viewBox="0 0 24 24">
              <use href="#trash"></use>
            </svg>
          </div>`
        : ''
      }
      <p class="ds--button-paragraph">${label}</p>
    </button>
  `;
};

export interface Props {
  label: string
  size: SizeButton
  type: TypeButton
  state: StateButton
  icon?: string
  isFull?: boolean 
}

