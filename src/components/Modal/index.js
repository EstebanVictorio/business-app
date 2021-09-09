/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { useContext } from "react"
import { createPortal } from "react-dom"
import { ModalContext } from "context/ModalContext"

const styles = css`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

/**
 * @typedef {{
 *  open: boolean
 * }} Props
 * @type {FC<Props>} Modal
 */
const Modal = ({ children, open }) => {
  const root = useContext(ModalContext)
  return createPortal(
    <dialog open={open} css={styles}>
      {children}
    </dialog>
  , root)
}


export default Modal
