/** @jsx jsx */
import { jsx, css } from "@emotion/react"

/**
 * @typedef {{
 *  width: '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%'
 * }} Props
 * @type {FC<Props>} Header
 * */
 const Header = ({ children, width }) => {
  return (
    <th css={css`
      width: ${width};
    `}>
      {children}
    </th>
  )
}

export default Header
