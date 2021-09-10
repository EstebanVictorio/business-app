import { css } from "@emotion/react"
const palette = css`
  :root {
    --white: #f5f5f5;
    --black: #1a1a1a;
    --blue: #0074D9;
    --spacey: #0074D9;
    --green: #1B998B;
    --red: #CA054D;
  }

  svg > path {
    stroke: var(--icon-stroke);
    fill: var(--icon-fill);
  }

  a {
    color: var(--link-color);
  }

  [data-theme] {
    background-color: var(--bg-color);
    color: var(--color);
  }

  [data-theme="light"] {
    --bg-color: var(--white);
    --color: var(--black);
    --table-cell-bg-color: lightgray;
    --dialog-bg-color: var(--white);
    --icon-stroke: var(--black);
    --icon-fill: var(--black);

    --primary: var(--black);
    --bg-primary: lightgray;
    --primary-border: var(--black);

    --info: var(--white);
    --bg-info: var(--spacey);
    --info-border: var(--white);

    --danger: var(--white);
    --bg-danger: var(--red);
    --info-border: var(--black);
    --danger-border: var(--black);
  }

  [data-theme="dark"] {
    --bg-color: var(--black);
    --color: var(--white);
    --table-cell-bg-color: black;
    --dialog-color: var(--white);
    --dialog-bg-color: var(--black);
    --icon-stroke: var(--white);
    --icon-fill: var(--white);
    
    --primary: var(--white);
    --bg-primary: var(--blue);
    --primary-border: var(--white);

    --info: var(--white);
    --bg-info: var(--spacey);
    --info-border: var(--white);

    --danger: var(--white);
    --bg-danger: var(--red);
    --danger-border: var(--white);
    --link-color: cyan;
  }

  td {
    background-color: var(--table-cell-bg-color);
  }

  dialog {
    color: var(--dialog-color);
  }

  dialog > [data-content] {
    background-color: var(--dialog-bg-color);
  }


  [data-variant="primary"] {
    color: var(--primary);
    background-color: var(--bg-primary);
  }

  [data-variant="info"] {
    color: var(--info);
    background-color: var(--bg-info);
  }

  [data-variant="danger"] {
    color: var(--danger);
    background-color: var(--bg-danger);
  }


  button[data-variant],
  input[type="button"][data-variant] {
  }

  button[data-variant="primary"],
  input[type="button"][data-variant="primary"] {
    border-color: var(--primary-border);
  }

  button[data-variant="info"],
  input[type="button"][data-variant="info"] {
    border-color: var(--info-border);
  }

  button[data-variant="danger"],
  input[type="button"][data-variant="danger"] {
    border-color: var(--danger-border);
  }
`


export default palette
