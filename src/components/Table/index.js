/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { useContext } from "react"
import { ThemeContext } from "context/ThemeContext"
import Header from "./Header"
import Row from "./Row"
import Cell from "./Cell"
import Body from "./Body"
import Head from "./Head"


const styles = css`
  width: 100%;
  margin: 0.5rem 0;
  max-width: 90rem;
  border-collapse: collapse;

  th {
    border: 1px solid;
    background-color: var(--header-bg);
  }

  
  &[data-theme="light"] {
    --header-bg: #CCCCCC;
  }

  &[data-theme="dark"] {
    --header-bg: #347FC4;
  }
`

/**
 * @type {FC & {
 *  Header: FC<import('./Header').Props>
 *  Row: FC
 *  Cell: FC
 *  Head: FC
 *  Body: FC
 * } Table
 * */
const Table = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <table css={styles} data-theme={theme}>
      {children}
    </table>
  )
}


Table.Head = Head
Table.Body = Body
Table.Header = Header
Table.Row = Row
Table.Cell = Cell


export default Table
