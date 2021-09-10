/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Form from "components/Form"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { editLoading } from "store/slice/business"
import Modal from "components/Modal"

const titleStyles = css`
  margin: 0;
  width: 100%;
`

const containerStyles = css`
  display: flex;
  flex-wrap: wrap;
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


  [data-edit="cancel"],
  [data-edit="confirm"] {
    width: 50%;
  }
`

/**
 * @typedef {{
 *  name: string
 *  businessId: string
 *  open: boolean
 *  onClose: () => void
 * }} Props
 * @type {FC<Props>} Edit
 */
const Edit = ({ name, businessId, open, onClose }) => {
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  /**
   * 
   * @param {import("react").ChangeEvent} e 
   */
  const handleChange = (e) => {
    setValue(e.target.value)
  }

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

  useEffect(() => {
    if (open && name) {
      setValue(name)
    }
  }, [name, open])

  const onSubmit = (values) => {
    dispatch(editLoading({ name: values['business-name'], businessId }))
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Form onSubmit={onSubmit} validate={validate}>
        <div css={containerStyles}>
          <h2 css={titleStyles}>Edit</h2>
          {errors.length > 0 ? (
            <ul>
              {errors.map((error, i) => <li key={`edit-error-${i}`}>{error}</li>)}
            </ul>
          ) : null}
          <fieldset css={fieldsetStyles}>
            <input name="business-name" value={value} onChange={handleChange}/>
            <input data-edit="cancel" type="button" value="Cancel" onClick={onClose} />
            <input data-edit="confirm" data-variant="info" type="submit" value="Edit" />
          </fieldset>
        </div>
      </Form>
    </Modal>
  )
}


export default Edit
