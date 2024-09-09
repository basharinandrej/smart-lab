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
  state = StateButton.Default
}: Props) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = label;
  button.addEventListener('click', onClick);

  button.className = [
    'ds--button',

    getClassNamesByTypes(type),
    getClassNamesBySizes(size),
    getClassNamesByStates(state),
  ].join(' ');


  return button;
};

export interface Props {
  label: string
  onClick: () => void
  size: SizeButton
  type: TypeButton
  state: StateButton
}

