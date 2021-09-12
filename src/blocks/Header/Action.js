/** @jsx jsx */
import { jsx, css } from "@emotion/react"


/**
 * @typedef {{
 *  type: 'person' | 'business'
 *  width: '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%'
 *  variant: 'primary'
 *  value: string
 *  onClick?: () => void
 * }} Props
 * @type {FC<Props>} Action
 **/
const Action = ({ type, variant, width, onClick, value }) => {
  return (
    <div css={css`
      width: ${width};
      display: flex;
    `}>
      <input css={css`width:100%;`} type="button" value={value} data-variant={variant} onClick={onClick}/>
    </div>
  )
}


export default Action
