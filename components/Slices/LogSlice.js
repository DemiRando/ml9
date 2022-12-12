import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  logged: false,
}

export const logSlice = createSlice({
  name: 'logged',
  initialState,
reducers: {
  setLogged(state) {
    state.logged = true;
  },
  setLogOut(state){
    state.logged = false;
  }
}
})

export const { setLogged,setLogOut } = logSlice.actions
export default logSlice.reducer
export const getLog = (state) => state.logged.logged;