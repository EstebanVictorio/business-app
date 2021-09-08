/** @jsx jsx */
import { jsx, css } from "@emotion/react"

/**
  * @typedef {{
  *  width: '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%'
  * }} Props
  * @type {FC<Props>} Cell
**/
const Cell = ({ children, width }) => {
  return (
    <td css={css`
      width: ${width};
    `}>
      {children}
    </td>
  )
}


export default Cell
