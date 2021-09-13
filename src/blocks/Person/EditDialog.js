/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Form from "components/Form"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { editLoading } from "store/slice/person"
import Modal from "components/Modal"
import { useTranslation } from "react-i18next"

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

  label span {
    display: block;
  }

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
  const { t } = useTranslation(['common', 'dialog'])

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
       validateErrors.push({ type: 'name', pass: false })
     }
 
     if (!values['person-role']) {
       validateErrors.push({ type: 'role', pass: false })
     }
 
     if (!values['person-email']) {
       validateErrors.push({ type: 'email', pass: false })
     }
 
     if (!values['person-phone']) {
       validateErrors.push({ type: 'phone', pass: false })
     }
 
     if(validateErrors.length > 0) {
       setErrors(validateErrors)
       return false
     }
     setErrors([])
     return true
   }

  useEffect(() => {
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
          <h2 css={titleStyles}>{t('common:actions.edit')}</h2>
          <Form.Errors errors={errors} />
          <fieldset css={fieldsetStyles}>
            <label>
              <span>{t('common:labels.name')}</span>
              <input name="person-name" value={nameValue} onChange={handleNameChange}/>
            </label>
            <label>
              <span>{t('common:labels.role')}</span>
              <input name="person-role" value={roleValue} onChange={handleRoleChange}/>
            </label>
            <label>
              <span>{t('common:labels.email')}</span>
              <input name="person-email"type="email" value={emailValue} onChange={handleEmailChange}/>
            </label>
            <label>
              <span>{t('common:labels.phone')}</span>
              <input name="person-phone" type="number" value={phoneValue} onChange={handlePhoneChange}/>
            </label>
            <input data-edit="cancel" type="button" value={t('common:actions.cancel')} onClick={onClose} />
            <input data-edit="confirm" data-variant="info" type="submit" value={t('common:actions.edit')} />
          </fieldset>
        </div>
      </Form>
    </Modal>
  )
}

export default Edit
