/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Form from "components/Form"
import { useState } from "react"
import { useTranslation } from "react-i18next"
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

  label span {
    display: block;
  }

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
  const { t } = useTranslation(['common', 'dialog'])

  /**
  * @param {{
  *  'business-name': string
  * }} values
  */
  const validate = (values) => {
    if (!values['business-name']) {
      setErrors([
        { type: 'name', pass: false }
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
        <h2 css={titleStyles}>{t("common:actions.create")}</h2>
        <Form.Errors errors={errors} />
        <fieldset css={fieldsetStyles}>
          <label>
            <span>{t('common:labels.name')}</span>
            <input name="business-name" />
          </label>
          <input data-create="cancel" type="button" value={t("common:actions.cancel")} onClick={onClose} />
          <input data-create="confirm" data-variant="info" type="submit" value={t("common:actions.create")} />
        </fieldset>
      </Form>
    </Modal>
  )
}


export default Create
