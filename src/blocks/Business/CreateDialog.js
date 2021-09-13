/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Form from "components/Form"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addLoading } from "store/slice/business"
import Modal from "components/Modal"

const titleStyles = css`
  margin: 0;
  width: 100%;
`

const fieldsetStyles = css`
  margin: 2rem 0;
  border: none;
  padding: 0;

  input {
    box-sizing: border-box;
  }

  [name="business-name"] {
    width: 100%;
  }

  [data-create="cancel"],
  [data-create="confirm"] {
    width: 50%;
  }
`

/**
 * @typedef {{
 *  open: boolean
 *  onClose: () => void
 * }} Props
 * @type {FC<Props>} Create
 */
const Create = ({ open, onClose }) => {
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()


  /**
  * @param {{
  *  'business-name': string
  * }} values
  */
  const validate = (values) => {
    if (!values['business-name']) {
      setErrors([
        'Business name is missing'
      ])
      return false
    }
    setErrors([])
    return true
  }

  const onSubmit = (values) => {
    dispatch(addLoading({ name: values['business-name'] }))
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Form onSubmit={onSubmit} validate={validate}>
        <h2 css={titleStyles}>Create</h2>
        <ul>
          {errors.map((error, i) => <li key={`create-error-${i}`}>{error}</li>)}
        </ul>
        <fieldset css={fieldsetStyles}>
          <input name="business-name" />
          <input data-create="cancel" type="button" value="Cancel" onClick={onClose} />
          <input data-create="confirm" data-variant="info" type="submit" value="Create" />
        </fieldset>
      </Form>
    </Modal>
  )
}


export default Create
