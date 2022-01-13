import React, { useReducer, useState } from 'react'
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Container,
    List,
    ListItem,
    Paper,
    TextField,
    Typography
} from '@mui/material'
import { v4 as uuid } from 'uuid'
import initialTodos from './data/todos'
import { filterTypes, filterValues, TODO_ACTIONS } from './constants'

const filterReducer = (state, action) => {
    switch (action.type) {
        case filterTypes.SHOW_ALL:
            return filterValues.ALL
        case filterTypes.SHOW_COMPLETE:
            return filterValues.COMPLETE
        case filterTypes.SHOW_INCOMPLETE:
            return filterValues.INCOMPLETE
        default:
            throw new Error()
    }
}

const todoReducer = (state, action) => {
    switch (action.type) {
        case TODO_ACTIONS.DO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: true }
                } else {
                    return todo
                }
            })
        case TODO_ACTIONS.UNDO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: false }
                } else {
                    return todo
                }
            })
        case TODO_ACTIONS.ADD:
            return state.concat({
                task: action.task,
                id: action.id,
                complete: false,
            })
        default:
            throw new Error()
    }
}

const App = () => {
    const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
    const [filter, dispatchFilter] = useReducer(filterReducer, filterValues.ALL)
    const [task, setTask] = useState('')
    
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
    
    const handleCheckboxChange = todo => {
        dispatchTodos({
            type: todo.complete ? TODO_ACTIONS.UNDO : TODO_ACTIONS.DO,
            id: todo.id,
        })
    }
    
    const handleInputChange = event => {
        setTask(event.target.value)
    }
    
    const handleShowAll = () => {
        dispatchFilter({ type: filterTypes.SHOW_ALL })
    }
    
    const handleShowComplete = () => {
        dispatchFilter({ type: filterTypes.SHOW_COMPLETE })
    }
    
    const handleShowIncomplete = () => {
        dispatchFilter({ type: filterTypes.SHOW_INCOMPLETE })
    }
    
    const handleSubmit = event => {
        if (task) {
            dispatchTodos({ type: TODO_ACTIONS.ADD, id: uuid(), task })
        }
        setTask('')
        event.preventDefault()
    }
    
    const getFilterButtonColor = (type) => {
        return (filter === type) ? 'secondary' : 'info'
    }
    
    return (
        <Container maxWidth="lg">
            <Box sx={{ p: 2 }}>
                <ButtonGroup variant="text" color="info">
                    <Button color={getFilterButtonColor(filterValues.ALL)} onClick={handleShowAll}>{filterValues.ALL}</Button>
                    <Button color={getFilterButtonColor(filterValues.COMPLETE)} onClick={handleShowComplete}>{filterValues.COMPLETE}</Button>
                    <Button color={getFilterButtonColor(filterValues.INCOMPLETE)} onClick={handleShowIncomplete}>{filterValues.INCOMPLETE}</Button>
                </ButtonGroup>
            </Box>
            
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>TODO List</Typography>
                <List>
                    {!filteredTodos.length && <ListItem>No items</ListItem>}
                    {filteredTodos.map(todo => (
                        <ListItem disablePadding key={todo.id}>
                            <label>
                                <Checkbox
                                    color="success"
                                    checked={todo.complete}
                                    onChange={() => handleCheckboxChange(todo)}
                                />
                                {todo.task}
                            </label>
                        </ListItem>
                    ))}
                </List>
            </Paper>
            
            <Box sx={{ p: 4 }}>
                <form onSubmit={handleSubmit} className="d-flex">
                    <TextField
                        sx={{ width: '50%', mr: 4 }}
                        placeholder="New Todo"
                        variant="standard"
                        value={task}
                        onChange={handleInputChange}
                    />
                    <Button variant="outlined" color="primary" type="submit">Add Todo</Button>
                </form>
            </Box>
        
        </Container>
    )
}


export default App
