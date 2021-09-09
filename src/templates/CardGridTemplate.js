/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { Children } from "react"

const styles = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 2rem;

  @media screen and (min-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    
  }
`

/** @type {FC} CardGridTemplate */
const CardGridTemplate = ({ children }) => {
  const cardsAsListItem = Children.map(children, child => {
    return (
      <li>
        {child}
      </li>
    )
  })

  return (
    <ul css={styles}>
      {cardsAsListItem}
    </ul>
  )
}

export default CardGridTemplate
