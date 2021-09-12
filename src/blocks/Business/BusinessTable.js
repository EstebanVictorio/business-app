import { Link } from "react-router-dom"
import Table from "components/Table"

/**
 * @typedef {{
 *  businesses: Business[]
 *  editAction: (businessId: string, name: string) => void
 *  deleteAction: (businessId: string, name: string) => void
 * }} Props
 * @type {FC<Props>} Business
 */
const Business = ({ businesses, editAction, deleteAction }) => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Header width="70%">
          Business
        </Table.Header>
        <Table.Header width="30%">
          Actions
        </Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {businesses.map(({ businessId, name }) => (
        <Table.Row key={businessId}>
          <Table.Cell width="70%">
            <Link to={`/business/${name}`}>
              {name}
            </Link>
          </Table.Cell>
          <Table.Cell width="30%">
            <input
              type="button"
              data-variant="info"
              value="Edit"
              onClick={() => editAction(businessId, name)}
            />
            <input
              type="button"
              data-variant="danger"
              value="Delete"
              onClick={() => deleteAction(businessId, name)}
            />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)

export default Business

