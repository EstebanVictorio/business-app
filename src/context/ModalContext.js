import { createContext, useRef } from "react"

/**
 * @type {React.Context<HTMLElement>} ModalContext
 */
const ModalContext = createContext()
const { Provider } = ModalContext

/**
 * @typedef {{
 *  root: HTMLElement
 * }} Props
 * @type {FC<Props>} ModalProvider
 */
 const ModalProvider = ({ children, root }) => {
  const rootRef = useRef(root)
  return (
    <Provider value={rootRef.current}>
      {children}
    </Provider>
  )
}

export { ModalContext }
export default ModalProvider
