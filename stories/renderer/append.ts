export const append = (node, html) => {
    const container = node || document.body
    container.innerHTML = html
  
    return container
  }