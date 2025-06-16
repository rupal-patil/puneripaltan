'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import store from '@/lib/store'
import playersReducer from '@/lib/features/players/players-slice'
export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store()
    storeRef.current.dispatch(playersReducer())
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}