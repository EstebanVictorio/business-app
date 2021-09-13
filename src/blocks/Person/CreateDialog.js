/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Form from "components/Form"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addLoading } from "store/slice/person"
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

  [name*="person-"] {
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
 *  businessId: string
 *  onClose: () => void
 * }} Props
 * @type {FC<Props>} Create
 */
const Create = ({ businessId, open, onClose }) => {
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()


  /**
  * @param {{
  *  'person-name': string
  *  'person-role': string
  *  'person-email': string
  *  'person-phone': string
  * }} values
  */
  const validate = (values) => {
    const validateErrors = []

    if (!values['person-name']) {
      validateErrors.push('Name is missing')
    }

    if (!values['person-role']) {
      validateErrors.push('Role is missing')
    }

    if (!values['person-email']) {
      validateErrors.push('Email is missing')
    }

    if (!values['person-phone']) {
      validateErrors.push('Phone is missing')
    }

    if(validateErrors.length > 0) {
      setErrors(validateErrors)
      return false
    }
    setErrors([])
    return true
  }

  const onSubmit = (values) => {
    dispatch(addLoading({
      businessId,
      name: values['person-name'],
      role: values['person-role'],
      email: values['person-email'],
      phone: values['person-phone'],
    }))
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Form onSubmit={onSubmit} validate={validate}>
        <h2 css={titleStyles}>Create</h2>
        <ul>
          {errors.map((error, i) => <li key={`create-error-${i}`}>{error}</li>)}
        </ul>
        <fieldset css={fieldsetStyles}>
          <input name="person-name" />
          <input name="person-role" />
          <input name="person-email" type="email" />
          <input name="person-phone" type="number" />
          <input data-create="cancel" type="button" value="Cancel" onClick={onClose} />
          <input data-create="confirm" data-variant="info" type="submit" value="Create" />
        </fieldset>
      </Form>
    </Modal>
  )
}

export default Create
