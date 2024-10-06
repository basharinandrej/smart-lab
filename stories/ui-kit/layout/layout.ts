import './layout.css'

export const layout = (header, leftSide, main, rightSide) => {
    return `
      <div class="ds--layout">
        <header class="ds--layout-header">${header}</header>
        <div class="ds--layout-content">
          <aside class="ds--layout-left">${leftSide}</aside>
          <main class="ds--layout-main">${main}</main>
          <aside class="ds--layout-right">${rightSide}</aside>
        </div>
      </div>
    `
  }