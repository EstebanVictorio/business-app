/** @jsx jsx */
import { jsx, css } from "@emotion/react"


/**
 * @typedef {{
 *  type: 'person' | 'business'
 *  width: '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%'
 * }} Props
 * @type {FC<Props>} Action
 **/
const Action = ({ type, width }) => {
  return (
    <div css={css`
      width: ${width};
      display: flex;
    `}>
      <input css={css`width:100%;`} type="button" value={type}/>
    </div>
  )
}


export default Action
