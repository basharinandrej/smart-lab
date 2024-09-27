export const createElement = (tag: keyof HTMLElementTagNameMap = 'div', html: string) => {
    const element = document.createElement(tag)
    element.innerHTML = html
  
    return element
  }