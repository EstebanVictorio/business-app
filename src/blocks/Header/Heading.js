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
      margin-bottom: 1rem;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
        margin-bottom: 0;
      }
    `}>
      {children}
    </div>
  )
}


export default Heading
