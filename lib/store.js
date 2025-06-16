import { configureStore } from '@reduxjs/toolkit'
import playersReducer from './features/players/players-slice';
const store = () => {
  return configureStore({
    reducer: {
        players:playersReducer,
    },
  })
}
export default  store;