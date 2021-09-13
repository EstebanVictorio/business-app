/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Form from "components/Form"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { deleteLoading } from "store/slice/business"
import Modal from "components/Modal"

const titleStyles = css`
  margin: 0;
  width: 100%;
`

const fieldsetStyles = css`
  margin: 2rem 0;


  input {
    box-sizing: border-box;
  }


  [data-delete="cancel"],
  [data-delete="confirm"] {
    width: 50%;
  }
`

/**
 * @typedef {{
 *  businessId: string
 *  name: string
 *  open: boolean
 *  onClose: () => void
 * }} Props
 * @type {FC<Props>} Delete
 */
const Delete = ({ open, onClose, name, businessId }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation('common')

  const onSubmit = () => {
    dispatch(deleteLoading({ businessId }))

  }

  return (
    <Modal open={open} onClose={onClose}>
      <Form onSubmit={onSubmit}>
        <h2 css={titleStyles}>{t('actions.delete')}</h2>
        <fieldset css={fieldsetStyles}>
          <legend>{t('dialog:actions.delete', { entity: name })}</legend>
          <input type="button" data-delete="cancel" value={t('actions.cancel')} onClick={onClose} />
          <input type="submit" data-delete="confirm" data-variant="danger" value={t('actions.delete')} />
        </fieldset>
      </Form>
    </Modal>
  )
}


export default Delete
