/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { lazy, Suspense } from "react"
import useToggle from "hooks/useToggle"
import Toggle from "components/Toggle"
import Icon from "components/Icon"
import Card from "components/Card"
import Table from "components/Table"
import { useTranslation } from "react-i18next"

const LazyCardGridTemplate = lazy(() => import('templates/CardGridTemplate'))

/**
 * @typedef {{
 *  persons: Person[]
 *  editAction: (businessId: string, personId: string) => void
 *  deleteAction: (businessId: string, personId: string) => void
 * }} Props
 * @type {FC<Props>} PersonRegistry
 */
const PersonRegistry = ({ persons, editAction, deleteAction }) => {
  /**
  * @type {{ id?: string }} params
  */
  const { selected, handleSelect } = useToggle('card-grid')
  const { t } = useTranslation('common')

  const handleCardGridSelect = () => {
    handleSelect('card-grid')
  }

  const handleTableSelect = () => {
    handleSelect('table')
  }

  return (
    <div>
      <div css={css`justify-content: flex-end; display: flex; margin: 1rem 0;`}>
        <Toggle>
          <Toggle.Option selected={selected === 'card-grid'} onChange={handleCardGridSelect}>
            <Icon featherIcon="icon-grid" />
          </Toggle.Option>
          <Toggle.Option selected={selected === 'table'} onChange={handleTableSelect}>
            <Icon featherIcon="icon-list" />
          </Toggle.Option>
        </Toggle>
      </div>
      {
        selected === 'card-grid' && (
          <Suspense fallback={<div>Loading template...</div>}>
            <LazyCardGridTemplate>
              {
                persons.map(({ personId, name, role, phone, email }) => (
                  <Card key={personId}>
                    <Card.Header>
                      {t('labels.name', { name })}
                    </Card.Header>
                    <Card.Actions>
                      <div css={css`display: flex; justify-content: flex-end;`}>
                        <input
                          type="button"
                          data-variant="info"
                          value={t('actions.edit')}
                          onClick={() => editAction(personId, name, role, email, phone)}
                        />
                        <input
                          type="button"
                          data-variant="danger"
                          value={t('actions.delete')}
                          onClick={() => deleteAction(personId, name)}
                        />
                      </div>
                    </Card.Actions>
                    <Card.Body>
                    {t('labels.role', { role })}
                    </Card.Body>
                    <Card.Footer>
                      <p>{t('labels.phone', { phone })}</p>
                      <p>{t('labels.email', { email })}</p>
                    </Card.Footer>
                  </Card>
                ))
              }
            </LazyCardGridTemplate>
          </Suspense>
        )
      }
      {
        selected === 'table' && (
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Header width="50%">
                  {t('table.headers.business')}
                </Table.Header>
                <Table.Header width="25%">
                {t('table.headers.role')}
                </Table.Header>
                <Table.Header width="25%">
                {t('table.headers.actions')}
                </Table.Header>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {persons.map(({ personId, name, role, email, phone }) => (
                <Table.Row key={personId}>
                  <Table.Cell>
                    {name}
                  </Table.Cell>
                  <Table.Cell>
                    {role}
                  </Table.Cell>
                  <Table.Cell>
                  <input
                    type="button"
                    data-variant="info"
                    value={t('actions.edit')}
                    onClick={() => editAction(personId,name, role, email, phone)}
                  />
                  <input
                    type="button"
                    data-variant="danger"
                    value={t('actions.delete')}
                    onClick={() => deleteAction(personId, name)}
                  />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )
      }
    </div>
  )
}

export default PersonRegistry
