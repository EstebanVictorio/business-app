import Base from "templates/Base"
import Table from "components/Table"
import Modal from "components/Modal"
import Header from "blocks/Header"
import Section from "blocks/Section"

import { Link } from "react-router-dom"
import { query } from "store/reducer/business"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
  const [modalOpen, setModalState] = useState(false)
  const dispatch = useDispatch()
  const businesses = useSelector(state => state.business.businesses)

  useEffect(() => {
    dispatch(query())
  }, [])

  return (
    <Base>
      <Modal open={modalOpen}>
        <input type="button" value="Close" onClick={() => setModalState(false)}/>
        This is a modal
      </Modal>
      <Section>
        <Header>
          <Header.Heading width="70%">
            Business name
          </Header.Heading>
          <Header.Action width="30%" type="business" variant="primary" onClick={() => setModalState(true)}/>
        </Header>
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
                  <input type="button" data-variant="info" value="Edit" />
                  <input type="button" data-variant="danger" value="Delete" />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Section>
    </Base>
  )
}

export default Home
