/** @jsx jsx */
import { jsx, css } from "@emotion/react"

import Option from "./Option"

const styles = css`
  > label {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-left: 0.5px solid lightgray;
    border-right: 0.5px solid lightgray;
  }

  > label:first-of-type {
    border-left: 1px solid lightgray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  > label:last-child {
    border-right: 1px solid lightgray;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

/**
 * @type {FC & {
 *  Option: FC<import('./Option').Props>
 * }}
 */
const Toggle = ({ children }) => (
  <div css={styles}>
    {children}
  </div>
)

Toggle.Option = Option

export default Toggle
