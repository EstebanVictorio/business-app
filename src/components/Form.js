import { useCallback, useRef } from "react"
import { mapEntriesToValues } from "utils/form"

/**
 * @typedef {{
 *  onSubmit: (value) => void
 *  validate?: () => boolean
 * }} Props
 * @type {FC<Props>} Form
 */
const Form = ({ children, onSubmit, validate }) => {
  /**
   * @type {import('react').Ref<HTMLFormElement>} ref
   */
  const ref = useRef()
  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    const { current: form } = ref

    if (form) {
      const formData = new FormData(form)
      const values = mapEntriesToValues(formData.entries())
      
      if(validate && validate(values)) {
        onSubmit(values)
        form.reset()
        return
      }

      onSubmit()
      form.reset()
    }
  }, [onSubmit, validate])

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default Form
