/** @jsx jsx */
import { jsx, css } from "@emotion/react"

const styles = css`
  display: inline-block;
  padding: 0.5rem;
  cursor: pointer;

  > input[type="radio"] {
    display: none;
  }

  &[data-selected="true"] {
    color: var(--white);
    background-color: var(--blue);
  }
`

/**
 * @typedef {{
 *  selected: boolean,
 *  onChange: (value: string) => void
 * }} Props
 * @type {FC<Props>} Option
 * */
const Option = ({ children, selected, onChange }) => (
  <label css={styles} data-selected={selected}>
    <input type="radio" checked={selected} onChange={onChange}/>
    <span>
      {children}
    </span>
  </label>
)

export default Option
