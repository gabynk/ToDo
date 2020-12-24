export const addTodo = data => ({
    type: 'ADD_TODO',
    data
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
});

export const deleteAllTodo = props => ({
    type: 'DELETE_ALL_TODO'
});
