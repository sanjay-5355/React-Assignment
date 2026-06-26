import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const EmpReducer = createSlice({
  name: "Emp",
  initialState,
  reducers: {
    addfun: (state, action) => {
      state.data = [...state.data, action.payload];
    },

    deletefun: (state, action) => {
      state.data = state.data.filter((i, index) => index != action.payload);
    },
    updatefun: (state, action) => {
      state.data = state.data.map((i, index) => {
        if (index == action.payload.id) {
          i = action.payload.data;
        }

        return i;
      });
    },
  },
});

export const {addfun,updatefun,deletefun} = EmpReducer.actions
export default EmpReducer.reducer
