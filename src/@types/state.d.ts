import { PayloadAction as ReduxPayloadAction } from "@reduxjs/toolkit"

declare global {
  type PayloadAction<P> = ReduxPayloadAction<P>
  type QueryStatus = 'IDLE' | 'LOADING' | 'SUCCESS' | 'FAILURE'

  interface Business {
    name: string
  }

  interface BusinessReducerState {
    status: QueryStatus
    businesses: Business[]
  }

  interface BusinessPayload {
    businesses: Business[]
  }
}
