/** @jsx jsx */
import { jsx, css } from "@emotion/react"

const styles = css`
  font-size: 1.5rem;
`

/**
 * 
 * @typedef {{
 *  featherIcon: FeatherIcon
 * }} Props
 * @type {FC<Props>} Icon
 */
const Icon = ({
  featherIcon,
}) => (
  <i
    css={styles}
    className={`icon ${featherIcon}`}
  />
)

export default Icon
