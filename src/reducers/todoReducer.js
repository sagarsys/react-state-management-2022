import { TODO_ACTIONS } from '../constants'

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

export default todoReducer
