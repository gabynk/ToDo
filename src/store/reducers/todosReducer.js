import { createReducer } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, deleteAllTodo } from '../actions/todosActions';

const INITIAL_STATE = {
    data: []
}

export default createReducer(INITIAL_STATE, {
    [addTodo.type]: (state, action) => {
        return {
            ...state,
            data: [
                ...state.data,
                action.payload
            ]
        }
    },
    [deleteTodo.type]: (state, action) => {
        const newData = state.data.filter(item => {
            return item.id != action.payload
        })

        return {
            ...state,
            data: newData
        }
    },
    [deleteAllTodo.type]: (state, action) => {
        return {
            state
        }
    },
});
