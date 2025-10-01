import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";


export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await api.get("/");
  return res.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: { list: [], status: "idle" },
  reducers: {
    addUser: (state, action) => {
      state.list.unshift({ ...action.payload, id: Date.now(), company: { name: "Local" } });
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },
    updateUser: (state, action) => {
      const idx = state.list.findIndex((u) => u.id === action.payload.id);
      if (idx !== -1) {
        state.list[idx] = { ...state.list[idx], ...action.payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
