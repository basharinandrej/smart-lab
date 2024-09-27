export const layout = (leftSide, main, rightSide) => {
    return `
      <aside class="ds-layout-left">${leftSide}</aside>
      <main class="ds-layout-main">${main}</main>
      <aside class="ds-layout-right">${rightSide}</aside>
    `
  }