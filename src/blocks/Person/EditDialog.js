/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Form from "components/Form"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { editLoading } from "store/slice/person"
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

  [name*="person-"] {
    width: 100%;
  }

  [data-edit="cancel"],
  [data-edit="confirm"] {
    width: 50%;
  }
`

/**
 * @typedef {{
 *  personName: string
 *  personRole: string
 *  personEmail: string
 *  personPhone: string
 *  businessId: string
 *  open: boolean
 *  onClose: () => void
 * }} Props
 * @type {FC<Props>} Edit
 */
const Edit = ({ personName, personId, personRole, personEmail, personPhone, businessId, open, onClose }) => {
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  const [nameValue, setNameValue] = useState('')
  const [roleValue, setRoleValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')

  /**
  *
  * @param {import("react").ChangeEvent} e 
  */
  const handleNameChange = (e) => {
    setNameValue(e.target.value)
  }

  /**
  * 
  * @param {import("react").ChangeEvent} e 
  */
  const handleRoleChange = (e) => {
    setRoleValue(e.target.value)
  }

  /**
  *
  * @param {import("react").ChangeEvent} e 
  */
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value)
  }

  /**
   *
   * @param {import("react").ChangeEvent} e 
   */
   const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value)
  }

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

  useEffect(() => {
    console.log("Person: ", {
      personName,
      personRole,
      personEmail,
      personPhone,
    })
    if (open && personName && personRole && personEmail && personPhone) {
      setNameValue(personName)
      setRoleValue(personRole)
      setEmailValue(personEmail)
      setPhoneValue(personPhone)
    }
  }, [open, personName, personRole, personEmail, personPhone])

  const onSubmit = (values) => {
    dispatch(editLoading({
      businessId,
      personId,
      name: values['person-name'],
      role: values['person-role'],
      email: values['person-email'],
      phone: values['person-phone'],
    }))
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
            <input name="person-name" value={nameValue} onChange={handleNameChange}/>
            <input name="person-role" value={roleValue} onChange={handleRoleChange}/>
            <input name="person-email"type="email" value={emailValue} onChange={handleEmailChange}/>
            <input name="person-phone" type="number" value={phoneValue} onChange={handlePhoneChange}/>
            <input data-edit="cancel" type="button" value="Cancel" onClick={onClose} />
            <input data-edit="confirm" data-variant="info" type="submit" value="Edit" />
          </fieldset>
        </div>
      </Form>
    </Modal>
  )
}


export default Edit
