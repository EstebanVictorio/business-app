/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Form from "components/Form"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
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

  label span {
    display: block;
  }

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
  const { t } = useTranslation(['common', 'dialog'])
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
        { type: 'name', pass: false }
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
          <h2 css={titleStyles}>{t('common:actions.edit')}</h2>
          <Form.Errors errors={errors}/>
          <fieldset css={fieldsetStyles}>
            <label>
              <span>{t('common:labels.name')}</span>
              <input name="business-name" value={value} onChange={handleChange}/>
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
