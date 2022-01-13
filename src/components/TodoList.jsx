import React from 'react'
import { Checkbox, List, ListItem, Paper, Typography } from '@mui/material'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {
    return (
        <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>TODO List</Typography>
            <List>
                {!todos.length && <ListItem>No items</ListItem>}
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} />
                ))}
            </List>
        </Paper>
    )
}

export default TodoList
