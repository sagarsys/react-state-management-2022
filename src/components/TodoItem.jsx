import React, { useContext } from 'react'
import { Checkbox, ListItem } from '@mui/material'
import { TODO_ACTIONS } from '../constants'
import { useDispatch } from 'react-redux'
import { doTodo, undo } from '../reducers/todoReducer'

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch()
    const handleChange = todo => {
        if (todo.complete) {
            return dispatch(undo({
                type: TODO_ACTIONS.UNDO,
                id: todo.id,
            }))
        }
        return dispatch(doTodo({
            type: TODO_ACTIONS.DO,
            id: todo.id,
        }))
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
