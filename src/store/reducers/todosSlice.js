import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload.payload
                ]
            }
        },
        deleteTodo(state, action) {
            const newData = state.data.filter(item => {
                return item.id != action.payload.id
            })

            return {
                ...state,
                data: newData
            }
        }
    }
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;