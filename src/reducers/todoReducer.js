import { TODO_ACTIONS } from '../constants'
import initialTodos from '../data/todos'
import { createSlice } from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: initialTodos,
    },
    reducers: {
        doTodo(state, action) {
            state.todos.forEach(todo => {
                if (todo.id === action.payload.id) {
                    todo.complete = true
                }
            })
        },
        undo(state, action) {
            state.todos.forEach(todo => {
                if (todo.id === action.payload.id) {
                    todo.complete = false
                }
            })
        },
        add(state, action) {
            const { task, id } = action.payload;
            state.todos.push({ task, id, complete: false, })
        },
    }
})

export const { doTodo, undo, add } = TodoSlice.actions

export default TodoSlice.reducer

export const getTodos = (state) => state?.todo?.todos || [];
