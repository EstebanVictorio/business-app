import { css } from "@emotion/react"
const palette = css`
  :root {
    --white: #f5f5f5;
    --black: #1a1a1a;
    --blue: #0074D9;
  }

  svg > path {
    stroke: var(--icon-stroke);
    fill: var(--icon-fill);
  }

  [data-theme="light"] {
    background-color: var(--white);
    color: var(--black);
    --icon-stroke: var(--black);
    --icon-fill: var(--black);
  }


  [data-theme="dark"] {
    background-color: var(--black);
    color: var(--white);
    --icon-stroke: var(--white);
    --icon-fill: var(--white);
  }
`


export default palette
