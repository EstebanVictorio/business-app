import { css } from "@emotion/react"
const palette = css`
  :root {
    --white: #f5f5f5;
    --black: #1a1a1a;
    --blue: #0074D9;
    --spacey: #2E294E;
    --green: #1B998B;
    --red: #FF4136;
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

    --primary: var(--black);
    --bg-primary: lightgray;
    --primary-border: var(--black);

    --info: var(--white);
    --bg-info: var(--spacey);
    --info-border: var(--white);

    --danger: var(--white);
    --bg-danger: var(--red);
    --info-border: var(--black);
  }

  [data-theme="dark"] {
    background-color: var(--black);
    color: var(--white);
    --icon-stroke: var(--white);
    --icon-fill: var(--white);
    
    --primary: var(--white);
    --bg-primary: var(--blue);
    --primary-border: var(--white);

    --info: var(--white);
    --bg-info: var(--green);
    --info-border: var(--white);

    --danger: var(--white);
    --bg-danger: var(--red);
    --danger-border: var(--black);
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
