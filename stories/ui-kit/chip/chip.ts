import './chip.css';

export const createChip = ({
  paragraph,
  isWithElement = false
}: Props) => {

  const classNames = [
    'ds',
    'ds--chip',
    isWithElement ? 'ds--chip--with-element' : '',
    paragraph ? 'ds--chip--content' : ''
  ].join(' ');


  return `
    <div class="${classNames}">
      <p class="ds--chip-paragraph">${paragraph}</p>
    </div>
  `;
};

export interface Props {
  paragraph: string
  isWithElement?: boolean
}
