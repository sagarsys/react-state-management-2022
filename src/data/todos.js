import { v4 as uuid } from 'uuid'

export default [
    {
        id: uuid(),
        task: 'Learn React',
        complete: true,
    },
    {
        id: uuid(),
        task: 'Learn React Hooks',
        complete: true,
    },
    {
        id: uuid(),
        task: 'Learn State Management with React Hooks',
        complete: false,
    },
]
