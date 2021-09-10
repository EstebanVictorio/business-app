import { lazy, Suspense } from "react"
import Header from "blocks/Header"
import Section from "blocks/Section"
import Base from "templates/Base"
import { useParams } from "react-router-dom"
import useToggle from "hooks/useToggle"
import Toggle from "components/Toggle"
import Icon from "components/Icon"
import Card from "components/Card"
import Table from "components/Table"


const LazyCardGridTemplate = lazy(() => import('templates/CardGridTemplate'))


/**
 * 
 * @type {FC} Business
 */
const Business = () => {
  const { selected, handleSelect } = useToggle('card-grid')
  /**
   * @type {{ id: string }} params
   */
  const params = useParams()

  const businessName = `${
    params?.id[0].toUpperCase()
  }${
    params?.id.slice(1, params.id.length)
  }`

  const handleCardGridSelect = () => {
    handleSelect('card-grid')
  }

  const handleTableSelect = () => {
    handleSelect('table')
  }

  return (
    <Base>
      <Section>
        <Header>
          <Header.Heading width="70%">
            <h1>{businessName}</h1>
          </Header.Heading>
          <Header.Action width="30%" type="business" variant="primary" value="Create Business" />
        </Header>
        <Toggle>
          <Toggle.Option selected={selected === 'card-grid'} onChange={handleCardGridSelect}>
            <Icon featherIcon="icon-grid" />
          </Toggle.Option>
          <Toggle.Option selected={selected === 'table'} onChange={handleTableSelect}>
            <Icon featherIcon="icon-list" />
          </Toggle.Option>
        </Toggle>
      {
        selected === 'card-grid' && (
          <Suspense fallback={<div>Loading template...</div>}>
            <LazyCardGridTemplate>
              <Card>
                <Card.Header>
                  Sara
                </Card.Header>
                <Card.Body>
                  CEO
                </Card.Body>
                <Card.Footer>
                  <span>Phone</span>
                  <span>Email</span>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Header>
                  Tim
                </Card.Header>
                <Card.Body>
                  CCO
                </Card.Body>
                <Card.Footer>
                  <span>Phone</span>
                  <span>Email</span>
                </Card.Footer>
              </Card>
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
                  Name
                </Table.Header>
                <Table.Header width="25%">
                  Position
                </Table.Header>
                <Table.Header width="25%">
                  Actions
                </Table.Header>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  Sara
                </Table.Cell>
                <Table.Cell>
                  CEO
                </Table.Cell>
                <Table.Cell>
                  Actions
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width="50%">
                  Tim
                </Table.Cell>
                <Table.Cell width="25%">
                  CCO
                </Table.Cell>
                <Table.Cell width="25%">
                  Actions
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        )
      }
      </Section>
    </Base>
  )
}

export default Business
