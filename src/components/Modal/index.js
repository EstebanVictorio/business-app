/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { useContext, useState } from "react"
import { createPortal } from "react-dom"
import { ModalContext } from "context/ModalContext"
import Icon from "components/Icon"

const styles = css`
  border: none;
  border-radius: 4px;
  top: 5rem;
  z-index: 6;
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
    padding: 1rem;
    border-radius: 4px;
    width: 18.75rem;
    position: relative;
    border: 1px solid lightgray;
    display: block;
    box-sizing: border-box;
    z-index: 7;
    transition: transform 0.2s;
  }

  [data-close="label"] {
    width: 3rem;
    height: 3rem;
    border-radius: 4px;
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    display: flex;
    align-items: center;
    
    justify-content: center;
  }

  [data-close="button"] {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--red);
    z-index: 0;
  }

  [data-close="icon"] {
    position: relative;
    z-index: 1;
    color: var(--white);
    pointer-events: none;
  }

  &.mousedown [data-content] {
    transform: scale(1.025);
  }

  &.mouseup [data-content] {
    transform: scale(1);
  }

  [data-content].mouseleave {
    transform: initial;
  }

  [data-content].mouseenter {
    transform: scale(1);
  }
`

/**
 * @typedef {{
 *  open: boolean
 *  onClose: () => void
 * }} Props
 *
 * @type {FC<Props> & {
 *  Title: FC
 * }} Modal
 */
const Modal = ({ children, open, onClose }) => {
  const root = useContext(ModalContext)
  const [overlayMouseState, setOverlayMouseState] = useState('mouseup')

  return createPortal(
    <dialog
      data-modal
      className={overlayMouseState}
      open={open}
      css={styles}
      onMouseUp={() => setOverlayMouseState('mouseup')}
      onMouseDown={() => setOverlayMouseState('mousedown')}
      onMouseLeave={() => setOverlayMouseState('mouseup')}
    >
      <section
        data-content
        onMouseEnter={() => setOverlayMouseState('mouseup')}
        onMouseDown={(e) => {
          e.stopPropagation()
          setOverlayMouseState('mouseup')
        }}
      >
        <label data-close="label">
          <input data-close="button" type="button" onClick={onClose}/>
          <span data-close="icon">
            <Icon featherIcon="icon-x" />
          </span>
        </label>
        {children}
      </section>
    </dialog>
  , root)
}


export default Modal
