import React, { useContext } from 'react'
import { Checkbox, ListItem } from '@mui/material'
import { TODO_ACTIONS } from '../constants'
import { TodoContext } from '../App'

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext)
    const handleChange = todo => {
        dispatch({
            type: todo.complete ? TODO_ACTIONS.UNDO : TODO_ACTIONS.DO,
            id: todo.id,
        })
    }
    
    return (
        <ListItem disablePadding key={todo.id}>
            <label>
                <Checkbox
                    color="success"
                    checked={todo.complete}
                    onChange={() => handleChange(todo)}
                />
                {todo.task}
            </label>
        </ListItem>

    )
}

export default TodoItem
