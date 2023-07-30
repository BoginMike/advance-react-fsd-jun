import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: '',
        username: ''
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        }

    },
})

export const { setToken, setUsername } = userSlice.actions

export default userSlice.reducer