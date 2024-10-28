import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        name: '',
        email: '',
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            const { id, name, email } = action.payload;
            state.id = id;
            state.name = name;
            state.email = email;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.id = null;
            state.name = '';
            state.email = '';
            state.isLoggedIn = false;
        },
        updateUser: (state, action) => {
            const { name, email } = action.payload;
            if (name) state.name = name;
            if (email) state.email = email;
        },
    },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;