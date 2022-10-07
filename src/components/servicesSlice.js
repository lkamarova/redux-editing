import { createSlice } from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
  name: "services",
  initialState: {
    list: [],
  },
  reducers: {
    addService: (state, { payload }) => {
      state.list.push(payload);
    },
    deleteService: (state, { payload }) => {
      state.list = state.list.filter(el => el.id !== payload);
    },
    editService: (state, { payload }) => {
      state.list = state.list.map(el => el.id === payload.id ? payload : el )
    }

  },
});

export const { addService, deleteService, editService } = servicesSlice.actions;

export default servicesSlice.reducer;
