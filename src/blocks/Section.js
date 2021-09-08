/** @jsx jsx */
import { jsx, css } from "@emotion/react"

const styles = css`
  padding: 0 1rem;
`

/** @type {FC} Section */
const Section = ({ children }) => (
  <section css={styles}>
    {children}
  </section>
)

export default Section
