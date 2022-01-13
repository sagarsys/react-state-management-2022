import React, { useState } from 'react';
import { Box, Button, Checkbox, Container, List, ListItem, Paper, TextField, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import initialTodos from './data/todos';

const App = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [task, setTask] = useState('');
    
    const handleCheckboxChange = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            })
        );
    };
    
    const handleInputChange = event => {
        setTask(event.target.value);
    };
    
    const handleSubmit = event => {
        if (task) {
            setTodos(todos.concat({ id: uuid(), task, complete: false }));
        }
        setTask('');
        event.preventDefault();
    };
    
    return (
        <Container maxWidth="lg">
            
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>TODO List</Typography>
                <List>
                    {todos.map(todo => (
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
    );
};


export default App
