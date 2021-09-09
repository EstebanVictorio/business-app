import Header from "blocks/Header"
import Section from "blocks/Section"
import Base from "templates/Base"

const People = () => (
  <Base>
    <Section>
      <Header>
        <Header.Heading width="70%">
          Name
        </Header.Heading>
        <Header.Action width="30%" type="person" variant="primary" />
      </Header>
    </Section>
  </Base>
)

export default People
