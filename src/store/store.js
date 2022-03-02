import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../reducers/filterReducer'
import todoReducer from '../reducers/todoReducer'

export default configureStore({
    reducer: {
        filter: filterReducer,
        todo: todoReducer,
    },
})
