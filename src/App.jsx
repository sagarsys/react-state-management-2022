import React, { createContext, useReducer } from 'react'
import { Container } from '@mui/material'
import initialTodos from './data/todos'
import { filterTypes, filterValues, TODO_ACTIONS } from './constants'
import filterReducer, { getFilter } from './reducers/filterReducer'
import todoReducer, { getTodos } from './reducers/todoReducer'
import Filter from './components/Filter'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {
    const todos = useSelector(getTodos)
    const filter = useSelector(getFilter);
    
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
            <Container maxWidth="lg">
                <Filter filter={filter} />
                <TodoList todos={filteredTodos} />
                <AddTodo />
            </Container>
    )
}


export default App
