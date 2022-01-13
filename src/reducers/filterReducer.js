import { filterTypes, filterValues } from '../constants'

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

export default filterReducer
