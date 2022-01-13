import React, { createContext, useReducer } from 'react'
import { Container } from '@mui/material'
import initialTodos from './data/todos'
import { filterTypes, filterValues, TODO_ACTIONS } from './constants'
import filterReducer from './reducers/filterReducer'
import todoReducer from './reducers/todoReducer'
import Filter from './components/Filter'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

export const TodoContext = createContext(null)

const App = () => {
    const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
    const [filter, dispatchFilter] = useReducer(filterReducer, filterValues.ALL)
    
    const filteredTodos = todos.filter(todo => {
        if (filter === filterValues.ALL) {
            return true
        }
        if (filter === filterValues.COMPLETE && todo.complete) {
            return true
        }
        if (filter === filterValues.INCOMPLETE && !todo.complete) {
            return true
        }
        return false
    })
    
    return (
        <TodoContext.Provider value={dispatchTodos}>
            <Container maxWidth="lg">
                <Filter dispatch={dispatchFilter} filter={filter} />
                <TodoList todos={filteredTodos} />
                <AddTodo />
            </Container>
        </TodoContext.Provider>
    )
}


export default App
