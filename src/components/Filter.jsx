import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { filterTypes, filterValues } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { getFilter, showFilter } from '../reducers/filterReducer'

const Filter = ({ filter }) => {
    const dispatch = useDispatch();
    
    const handleShowAll = () => {
        dispatch(showFilter(filterValues.ALL))
    }
    
    const handleShowComplete = () => {
        dispatch(showFilter(filterValues.COMPLETE))
    }
    
    const handleShowIncomplete = () => {
        dispatch(showFilter(filterValues.INCOMPLETE))
    }
    
    const getFilterButtonColor = (type) => {
        return (filter === type) ? 'secondary' : 'info'
    }
    
    return (
        <Box sx={{ p: 2 }}>
            <ButtonGroup variant="text" color="info">
                <Button color={getFilterButtonColor(filterValues.ALL)} onClick={handleShowAll}>{filterValues.ALL}</Button>
                <Button color={getFilterButtonColor(filterValues.COMPLETE)} onClick={handleShowComplete}>{filterValues.COMPLETE}</Button>
                <Button color={getFilterButtonColor(filterValues.INCOMPLETE)} onClick={handleShowIncomplete}>{filterValues.INCOMPLETE}</Button>
            </ButtonGroup>
        </Box>
    )
}

export default Filter
