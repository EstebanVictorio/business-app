import { PayloadAction as ReduxPayloadAction } from "@reduxjs/toolkit"

declare global {
  type PayloadAction<P> = ReduxPayloadAction<P>
  type QueryStatus = 'IDLE' | 'LOADING' | 'SUCCESS' | 'FAILURE'
  type RequestStatus = 'idle' | 'loading' | 'success' | 'failure'

  interface Business {
    name: string
    businessId: string
  }

  interface BusinessReducerState {
    createStatus: QueryStatus
    editStatus: QueryStatus
    deleteStatus: QueryStatus
    queryStatus: QueryStatus
    querySingleStatus: QueryStatus
    businesses: Business[]
    business: Business
  }

  interface BusinessPayload {
    businesses?: Business[]
    business?: Business
    created?: Business
    name?: string
    businessId?: string
  }


  interface Person {
    personId: string
    name: string
    email: string
    phone: string
    role: string
    joinDate: string
  }

  interface PersonReducerState {
    createStatus: QueryStatus
    editStatus: QueryStatus
    deleteStatus: QueryStatus
    queryStatus: QueryStatus
    querySingleStatus: QueryStatus
    persons: Person[]
    person: Person
  }

  interface PersonPayload {
    businessId?: string
    persons?: Person[]
    person?: Person
    created?: Person
    name?: string
    email?: string
    phone?: string
    role?: string
    personId?: string
  }

  type BusinessReducer =
    Record<
      RequestStatus,
      (state: BusinessReducerState, action?: PayloadAction<BusinessPayload>) => void
    >

  type PersonReducer =
    Record<
      RequestStatus,
      (state: PersonReducerState, action?: PayloadAction<PersonPayload>) => void
    >
}
