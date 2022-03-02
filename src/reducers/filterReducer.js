import { filterTypes, filterValues } from '../constants'
import { createSelector, createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: filterValues.ALL
    },
    reducers: {
        showFilter(state, action) {
            state.filter = action.payload;
        }
    }
})

export const { showFilter } = filterSlice.actions
export default filterSlice.reducer

export const getFilter = (state) => state?.filter?.filter || filterValues.ALL;
