import { addTodo } from '../reducers/todosSlice'

let id = 0;

export const addTodoAction = (task, newToday, hours) => {
    const newTask = {
        'id': id++,
        'description': task,
        'data': newToday,
        'hour': hours
    };

    return addTodo({payload: newTask})
};