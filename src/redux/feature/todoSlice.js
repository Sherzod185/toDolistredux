import { createSlice } from "@reduxjs/toolkit";
  const initialState = {
    users: [],
  };
const todoSlice = createSlice({
  name: "todo",
  initialState,
reducers:{
  addTodo:(state, action)=>{
state.users.push(action.payload)},
deleteUsers:(state, action)=>{
  const newArr = state.users.filter(e=>e.id !== action.payload)
  return {...state, users: newArr}
}
}});
export const { addTodo, deleteUsers } = todoSlice.actions;
export default todoSlice.reducer