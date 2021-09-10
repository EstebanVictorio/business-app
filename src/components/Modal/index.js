/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { useContext } from "react"
import { createPortal } from "react-dom"
import { ModalContext } from "context/ModalContext"

const styles = css`
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  top: 5rem;
  position: fixed;
  width: 100vw;
  height: calc(100vh - 5rem);
  box-sizing: border-box;
  background-color: rgba(26,26,26, 0.5);

  &[open] {
    display: grid;
    place-content: center;
  }

  [data-content] {
    border-radius: 4px;
    width: 18.75rem;
    height: 12.5rem;
    border: 1px solid lightgray;
    display: block;
    box-sizing: border-box;
  }
`

/**
 * @typedef {{
 *  open: boolean
 * }} Props
 *
 * @type {FC<Props> & {
 *  Title: FC
 * }} Modal
 */
const Modal = ({ children, open }) => {
  const root = useContext(ModalContext)
  return createPortal(
    <dialog data-modal open={open} css={styles}>
      <section data-content>
        {children}
      </section>
    </dialog>
  , root)
}


export default Modal
