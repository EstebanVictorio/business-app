/** @jsx jsx */
import { jsx, css } from "@emotion/react"


/**
 * @typedef {{
 *  width: '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%'
 * }} Props
 * @type {FC<Props>} Heading
 **/
const Heading = ({ children, width }) => {
  return (
    <div css={css`
      width: ${width};
    `}>
      {children}
    </div>
  )
}


export default Heading
