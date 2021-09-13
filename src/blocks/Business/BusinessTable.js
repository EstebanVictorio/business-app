import { Link } from "react-router-dom"
import Table from "components/Table"
import { useTranslation } from "react-i18next"

/**
 * @typedef {{
 *  businesses: Business[]
 *  editAction: (businessId: string, name: string) => void
 *  deleteAction: (businessId: string, name: string) => void
 * }} Props
 * @type {FC<Props>} Business
 */
const Business = ({ businesses, editAction, deleteAction }) => {
  const { t } = useTranslation('common')
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header width="70%">
            {t('table.headers.business')}
          </Table.Header>
          <Table.Header width="30%">
          {t('table.headers.actions')}
          </Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {businesses.map(({ businessId, name }) => (
          <Table.Row key={businessId}>
            <Table.Cell width="70%">
              <Link to={`/business/${businessId}`}>
                {name}
              </Link>
            </Table.Cell>
            <Table.Cell width="30%">
              <input
                type="button"
                data-variant="info"
                value={t('actions.edit')}
                onClick={() => editAction(businessId, name)}
              />
              <input
                type="button"
                data-variant="danger"
                value={t('actions.delete')}
                onClick={() => deleteAction(businessId, name)}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default Business

