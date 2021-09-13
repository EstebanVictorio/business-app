/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Actions from "./Actions"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"


const styles = css`
  display: grid;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  grid-template-areas:
    "header actions"
    "body body"
    "footer footer";


  [data-actions] {
    grid-area: actions;
  }

  [data-header] {
    grid-area: header;
    width: 100%;
  }

  [data-body] {
    grid-area: body;
  }

  [data-footer] {
    grid-area: footer;
  }
`

/**
 * @type {FC & {
 *  Actions: FC
 *  Header: FC
 *  Body: FC
 *  Footer: FC
 * }} Card
 **/
const Card = ({ children }) => (
  <div data-card css={styles}>{children}</div>
)

Card.Actions = Actions
Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card
