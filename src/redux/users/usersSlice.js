import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'user',
  initialState: { users: [] },
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter(({ id }) => id !== payload);
    },
    updateStatus: (state, { payload }) => {
      state.users = state.users.map((user) => {
        if (user.id !== payload) {
          return user;
        } else {
          return {...user, status: user.status === 'offline' ? 'online' : 'offline'}
        }
      })


    }
  },
});

export const { addUser, deleteUser, updateStatus } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
