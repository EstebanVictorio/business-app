/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Action from "./Action"
import Heading from "./Heading"

const styles = css`
  display: flex;
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
`

/**
 * @type {FC & {
 *  Heading: FC<import('./Heading').Props>
 *  Action: FC<import('./Action').Props>
 * }} Header
 **/
const Header = ({ children }) => {
  return (
    <header css={styles}>
      {children}
    </header>
  )
}

Header.Action = Action
Header.Heading = Heading

export default Header
