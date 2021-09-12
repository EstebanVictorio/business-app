/** @jsx jsx */
import { jsx, css } from "@emotion/react"

const styles = css`
  box-sizing: border-box;
  padding: 0 1rem;
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;

  @media screen and (min-width:1440px) {
    padding: 0;
  }
`

/** @type {FC} Section */
const Section = ({ children }) => (
  <section css={styles}>
    {children}
  </section>
)

export default Section
