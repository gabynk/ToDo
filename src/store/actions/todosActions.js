import { createAction } from '@reduxjs/toolkit';

let id = 0;

export const addTodo = createAction('ADD_TODO', (task, newToday, hours) => {
    const newTask = {
        'id': id++,
        'description': task,
        'data': newToday,
        'hour': hours
    };

    return {
        payload: newTask
    }
});

export const deleteTodo = createAction('DELETE_TODO', (id) => {
    return {
        payload: id
    }
});

export const deleteAllTodo = createAction('DELETE_ALL_TODO');
