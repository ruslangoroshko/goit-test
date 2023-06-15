import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../network/API";

export const fetchRepositories = createAsyncThunk(
  "repository/fetchRepositories",
  async function (action, payload) {
    const { serachValue, page } = payload.getState().repos;
    const response = await API.getGitRepositories(serachValue, page);
    return response;
  }
);

const repositorySlice = createSlice({
  name: "repository",
  initialState: {
    serachValue: "",
    items: [],
    totalCount: 0,
    page: 1,

    isLoading: false,
  },
  reducers: {
    setSearchValue(state, action) {
      state.serachValue = action.payload;
      state.page = 1;
    },

    addRepos(state, action) {
      console.log("add");
    },

    nextPage(state, action) {
      if (state.page < Math.ceil(state.totalCount / 20)) {
        state.page = state.page + 1;
      }
    },
    prevPage(state, action) {
      if (state.page > 1) {
        state.page = state.page - 1;
      }
    },

    selectPage(state, action) {
      state.page = action.payload;
    },
  },

  extraReducers: {
    [fetchRepositories.pending]: (state, action) => {
      state.isLoading = true;
    },

    [fetchRepositories.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { items, total_count } = action.payload;
      state.totalCount = total_count;

      state.items = items;
    },
    [fetchRepositories.rejected]: (state, action) => {
      state.isLoading = false;
      alert("Reqest error");
    },
  },
});

export const { addRepos, nextPage, selectPage, setSearchValue, prevPage } =
  repositorySlice.actions;
export default repositorySlice.reducer;
