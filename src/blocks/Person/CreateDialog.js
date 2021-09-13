/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Form from "components/Form"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addLoading } from "store/slice/person"
import Modal from "components/Modal"
import { useTranslation } from "react-i18next"

const titleStyles = css`
  margin: 0;
  width: 100%;
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
  const { t } = useTranslation(['common', 'dialog'])


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
      validateErrors.push(t('dialog:forms.name'))
    }

    if (!values['person-role']) {
      validateErrors.push(t('dialog:forms.role'))
    }

    if (!values['person-email']) {
      validateErrors.push(t('dialog:forms.email'))
    }

    if (!values['person-phone']) {
      validateErrors.push(t('dialog:forms.phone'))
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
        <h2 css={titleStyles}>{t('common:actions.create')}</h2>
        <ul>
          {errors.map((error, i) => <li key={`create-error-${i}`}>{error}</li>)}
        </ul>
        <fieldset css={fieldsetStyles}>
          <label>
            <span>{t('common:labels.name')}</span>
            <input name="person-name" />
          </label>
          <label>
            <span>{t('common:labels.role')}</span>
            <input name="person-role" />
          </label>
          <label>
            <span>{t('common:labels.email')}</span>
            <input name="person-email" type="email" />
          </label>
          <label>
            <span>{t('common:labels.phone')}</span>
            <input name="person-phone" type="number" />
          </label>
          <input data-create="cancel" type="button" value={t('common:actions.cancel')} onClick={onClose} />
          <input data-create="confirm" data-variant="info" type="submit" value={t('common:actions.create')} />
        </fieldset>
      </Form>
    </Modal>
  )
}

export default Create
