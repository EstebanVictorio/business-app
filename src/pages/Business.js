import PersonRegistry from "blocks/Business/PersonRegistry"
import Header from "blocks/Header"
import Section from "blocks/Section"
import Base from "templates/Base"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { querySingleLoading } from "store/slice/business"
import { queryLoading } from "store/slice/person"
import CreateDialog from "blocks/Person/CreateDialog"
import EditDialog from "blocks/Person/EditDialog"
import DeleteDialog from "blocks/Person/DeleteDialog"

/**
 * 
 * @type {FC} Business
 */
const Business = () => {
  /**
   * @type {{ id?: string }} params
   */
  const params = useParams()
  const dispatch = useDispatch()
  const business = useSelector(state => state.business.business)
  const persons = useSelector(state => state.person.persons)
  const created = useSelector(state => state.person.createStatus === 'SUCCESS')
  const edited = useSelector(state => state.person.editStatus === 'SUCCESS')
  const deleted = useSelector(state => state.person.deleteStatus === 'SUCCESS')
  const [createDialogOpen,setCreateDialogOpen] = useState(false)
  const [{ open: editDialogOpen, draftPerson: editDraftPerson }, setEditDialogOpen] = useState({
    open: false,
    draftPerson: null
  })

  const [{ open: deleteDialogOpen, draftPerson: deleteDraftPerson }, setDeleteDialogOpen] = useState({
    open: false,
    draftPerson: null
  })

  useEffect(() => {
    if(created) {
      setCreateDialogOpen(false)
    }
  }, [created])

  useEffect(() => {
    if(edited) {
      setEditDialogOpen({
        open: false,
        draftPerson: null
      })
    }
  }, [edited])

  useEffect(() => {
    if(deleted) {
      setDeleteDialogOpen({
        open: false,
        draftPerson: null
      })
    }
  }, [deleted])


  useEffect(() => {
    if(params.id) {
      dispatch(querySingleLoading({ businessId: params.id }))
      dispatch(queryLoading({ businessId: params.id }))
    }
  }, [params])
  
  return (
    <Base>
      <CreateDialog
        open={createDialogOpen}
        businessId={params?.id}
        onClose={() => setCreateDialogOpen(false)}
      />
      <EditDialog
        open={editDialogOpen}
        businessId={params?.id}
        personId={editDraftPerson?.personId}
        personName={editDraftPerson?.name}
        personRole={editDraftPerson?.role}
        personEmail={editDraftPerson?.email}
        personPhone={editDraftPerson?.phone}
        onClose={() => setEditDialogOpen({ open: false, draftPerson: null })}
      />
      <DeleteDialog
        open={deleteDialogOpen}
        businessId={params?.id}
        personId={deleteDraftPerson?.personId}
        personName={deleteDraftPerson?.name}
        onClose={() => setDeleteDialogOpen({ open: false, draftPerson: null })}
      />
      <Section>
        <Header>
          <Header.Heading width="70%">
            <h1>{business.name}</h1>
          </Header.Heading>
          <Header.Action width="30%" type="person" variant="primary" value="Create Person" onClick={() => setCreateDialogOpen(true)}/>
        </Header>
        <PersonRegistry
          persons={persons}
          editAction={(personId, personName, personRole, personEmail, personPhone) => setEditDialogOpen({
            open: true,
            draftPerson: { personId, name: personName, role: personRole, email: personEmail, phone: personPhone }
          })}
          deleteAction={(personId, personName) => setDeleteDialogOpen({
            open: true,
            draftPerson: { personId, name: personName }
          })}
        />
      </Section>
    </Base>
  )
}

export default Business
