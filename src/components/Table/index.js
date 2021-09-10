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
  max-width: 90rem;
  margin: 0.5rem auto;
  border-collapse: collapse;
  border-radius: 4px;
  overflow: hidden;

  th {
    color: var(--white);
    background-color: var(--blue);
  }

  td {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    border-bottom: 0.5rem solid var(--bg-color);
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
 *  Cell: FC<import('./Cell').Props>
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
