import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  todos:[]
}

const TodoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    AddTodo : (state,action)=>{
      state.todos.push(action.payload);
    },
    deleteTodo : (state,action)=>{
      state.todos = state.todos.filter((todo, index) => index !== action.payload);
    },
    editTodo:(state,action)=>{
      const { index, updatedTodo } = action.payload;
      state.todos[index] = updatedTodo;
    }
  }
})

export const {AddTodo,deleteTodo,editTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
