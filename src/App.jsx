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
import { filterTypes, filterValues } from './constants'

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

const App = () => {
    const [filter, dispatchFilter] = useReducer(filterReducer, filterValues.ALL)
    const [todos, setTodos] = useState(initialTodos)
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
    
    const handleCheckboxChange = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, complete: !todo.complete }
                } else {
                    return todo
                }
            })
        )
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
            setTodos(todos.concat({ id: uuid(), task, complete: false }))
        }
        setTask('')
        event.preventDefault()
    }
    
    return (
        <Container maxWidth="lg">
            <Box sx={{ p: 2 }}>
                <ButtonGroup variant="text" color="info">
                    <Button onClick={handleShowAll}>{filterValues.ALL}</Button>
                    <Button onClick={handleShowComplete}>{filterValues.COMPLETE}</Button>
                    <Button onClick={handleShowIncomplete}>{filterValues.INCOMPLETE}</Button>
                </ButtonGroup>
            </Box>
            
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>TODO List</Typography>
                <List>
                    {filteredTodos.map(todo => (
                        <ListItem disablePadding key={todo.id}>
                            <label>
                                <Checkbox
                                    color="success"
                                    checked={todo.complete}
                                    onChange={() => handleCheckboxChange(todo.id)}
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
