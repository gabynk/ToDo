import { getNowDate, getNowHour } from '../../utils/config';

let id = 0;

export const addTodoAction = (task) => {
    const newToday = getNowDate();
    const hours = getNowHour();
    const newTask = {
        'id': id++,
        'description': task,
        'data': newToday,
        'hour': hours
    };

    return addTodo({ payload: newTask })
};
