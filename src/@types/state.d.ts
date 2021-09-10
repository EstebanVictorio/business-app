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
    businesses: Business[]
  }

  interface BusinessPayload {
    businesses?: Business[]
    created?: Business
    name?: string
    businessId?: string
  }

  type BusinessReducer =
    Record<
      RequestStatus,
      (state: BusinessReducerState, action?: PayloadAction<BusinessPayload>) => void
    >
}
