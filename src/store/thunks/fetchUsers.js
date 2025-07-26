import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //DEV ONLY!!
  await pause(1800);

  return response.data;
}); //it makes action.type = users/fetch/somethingRelated

//DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

//Redux Toolkit (RTK) automatically creates pending, fulfilled, and rejected action types for you when you use createAsyncThunk.
//users/fetch/pending === fetchUsers.pending triggers when API req starts
//users/fetch/fulfilled === fetchUsers.fulfilled triggers when API req succeeds
//users/fetch/rejected === fetchUsers.rejected triggers when API req fails
