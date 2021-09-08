import { lazy, Suspense } from "react"
import Header from "blocks/Header"
import Section from "blocks/Section"
import Base from "templates/Base"
import { useParams } from "react-router-dom"
import useToggle from "hooks/useToggle"
import Toggle from "components/Toggle"
import GridIcon from "components/icons/Grid"
import ListIcon from "components/icons/List"
import Card from "components/Card"


const LazyCardGridTemplate = lazy(() => import('templates/CardGridTemplate'))
const LazyTableTemplate = lazy(() => import('templates/TableTemplate'))


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
          <Header.Action width="30%" type="business" variant="primary" />
        </Header>
        <Toggle>
          <Toggle.Option selected={selected === 'card-grid'} onChange={handleCardGridSelect}>
            <GridIcon />
          </Toggle.Option>
          <Toggle.Option selected={selected === 'table'} onChange={handleTableSelect}>
            <ListIcon />
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
          <Suspense fallback={<div>Loading template...</div>}>
            <LazyTableTemplate />
          </Suspense>
        )
      }
      </Section>
    </Base>
  )
}

export default Business
