import Base from "templates/Base"
import Header from "blocks/Header"
import Section from "blocks/Section"
import EditDialog from "blocks/Business/EditDialog"
import CreateDialog from "blocks/Business/CreateDialog"
import DeleteDialog from "blocks/Business/DeleteDialog"
import BusinessTable from "blocks/Business/BusinessTable"

import { useTranslation } from "react-i18next"
import { queryLoading } from "store/slice/business"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
  const { t } = useTranslation('pages')
  
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [
    { open: editDialogOpen, draftBusiness: editDraftBusiness },
    setEditDialogOpen
  ] = useState({ open: false, draftBusiness: null })

  const [
    { open: deleteDialogOpen, draftBusiness: deleteDraftBusiness },
    setDeleteDialogOpen
  ] = useState({ open: false, draftBusiness: null })

  const dispatch = useDispatch()
  const businesses = useSelector(state => state.business.businesses)

  const created = useSelector(state => state.business.createStatus === 'SUCCESS')
  const edited = useSelector(state => state.business.editStatus === 'SUCCESS')
  const deleted = useSelector(state => state.business.deleteStatus === 'SUCCESS')

  useEffect(() => {
    if(created) {
      setCreateDialogOpen(false)
    }
  }, [created])

  useEffect(() => {
    if(edited) {
      setEditDialogOpen({
        open: false,
        draftBusiness: null,
      })
    }
  }, [edited])

  useEffect(() => {
    if(deleted) {
      setDeleteDialogOpen({
        open: false,
        draftBusiness: null,
      })
    }
  }, [deleted])

  useEffect(() => {
    dispatch(queryLoading())
  }, [])

  return (
    <Base>
      <CreateDialog
        open={createDialogOpen}
        onClose={() => setCreateDialogOpen(false)}
      />
      <EditDialog
        businessId={editDraftBusiness?.businessId}
        name={editDraftBusiness?.businessName}
        open={editDialogOpen}
        onClose={() => setEditDialogOpen({
          open: false,
          draftBusiness: null
        })}
      />
      <DeleteDialog
        businessId={deleteDraftBusiness?.businessId}
        name={deleteDraftBusiness?.businessName}
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen({
          open: false,
          draftBusiness: null
        })}
      />
      <Section>
        <Header>
          <Header.Heading width="70%">
            Welcome!
          </Header.Heading>
          <Header.Action
            width="30%"
            type="business"
            variant="primary"
            onClick={() => setCreateDialogOpen(true)}
            value={t('home.createBusiness')}
          />
        </Header>
        <BusinessTable
          businesses={businesses}
          editAction={(businessId, businessName) => setEditDialogOpen({
            open: true,
            draftBusiness: { businessId, businessName, }
          })}
          deleteAction={(businessId, businessName) => setDeleteDialogOpen({
            open: true,
            draftBusiness: { businessId, businessName }
          })}
        />
      </Section>
    </Base>
  )
}

export default Home
