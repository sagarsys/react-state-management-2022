import React, { useContext, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { TODO_ACTIONS } from '../constants'
import { v4 as uuid } from 'uuid'
import { TodoContext } from '../App'

const AddTodo = () => {
    const dispatch = useContext(TodoContext)
    const [task, setTask] = useState('')
    
    const handleChange = event => {
        setTask(event.target.value)
    }
    
    const handleSubmit = event => {
        if (task) {
            dispatch({ type: TODO_ACTIONS.ADD, id: uuid(), task })
        }
        setTask('')
        event.preventDefault()
    }
    
    return (
        <Box sx={{ p: 4 }}>
            <form onSubmit={handleSubmit} className="d-flex">
                <TextField
                    sx={{ width: '50%', mr: 4 }}
                    placeholder="New Todo"
                    variant="standard"
                    value={task}
                    onChange={handleChange}
                />
                <Button variant="outlined" color="primary" type="submit">Add Todo</Button>
            </form>
        </Box>
    )
}

export default AddTodo
