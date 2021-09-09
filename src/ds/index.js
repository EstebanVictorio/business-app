import { Fragment } from "react"
import { Global, css } from "@emotion/react"

import flow from "./flow"
import palette from "./palette"
import typeface from "./typeface"
import norm from "./norm"
import icons from "./icons"

const styles = css`
  ${flow}
  ${palette}
  ${typeface}
  ${norm}
  ${icons}
`

/** @type {FC} GlobalStyles */
const GlobalStyles = ({ children }) => (
  <Fragment>
    <Global styles={styles}/>
    {children}
  </Fragment>
)

export default GlobalStyles
