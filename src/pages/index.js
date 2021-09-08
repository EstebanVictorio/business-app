import Base from "templates/Base"
import Table from "components/Table"
import Section from "blocks/Section"

const Home = () => {

  return (
    <Base>
      <Section>
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
        </Table>
      </Section>
    </Base>
  )
}

export default Home
