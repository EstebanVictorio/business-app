/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Form from "components/Form"
import { useDispatch } from "react-redux"
import { deleteLoading } from "store/slice/person"
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
 *  personId: string
 *  personName: string
 *  open: boolean
 *  onClose: () => void
 * }} Props
 * @type {FC<Props>} Delete
 */
const Delete = ({ open, onClose, businessId, personId, personName }) => {
  const dispatch = useDispatch()
  console.log("Person delete dialog onSubmit", personName)
  const onSubmit = () => {
    console.log("Person delete dialog onSubmit")
    dispatch(deleteLoading({ businessId, personId }))
  }
  
  
  return (
    <Modal open={open} onClose={onClose}>
      <Form onSubmit={onSubmit}>
        <h2 css={titleStyles}>Delete</h2>
        <fieldset css={fieldsetStyles}>
          <legend>Are you sure you want to delete {personName}?</legend>
          <input type="button" data-delete="cancel" value="Cancel" onClick={onClose} />
          <input type="submit" data-delete="confirm" data-variant="danger" value="Delete" />
        </fieldset>
      </Form>
    </Modal>
  )
}


export default Delete