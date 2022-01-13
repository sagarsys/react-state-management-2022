import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { filterTypes, filterValues } from '../constants'

const Filter = ({ dispatch, filter }) => {
    
    const handleShowAll = () => {
        dispatch({ type: filterTypes.SHOW_ALL })
    }
    
    const handleShowComplete = () => {
        dispatch({ type: filterTypes.SHOW_COMPLETE })
    }
    
    const handleShowIncomplete = () => {
        dispatch({ type: filterTypes.SHOW_INCOMPLETE })
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
