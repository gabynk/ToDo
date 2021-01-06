let id = 0;

export const addTodo = (task, newToday, hours) => {
    const newTask = {
        'id': id++,
        'description': task,
        'data': newToday,
        'hour': hours
    };

    return {
        type: 'ADD_TODO',
        data: newTask
    }
}

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
});

export const deleteAllTodo = props => ({
    type: 'DELETE_ALL_TODO'
});
