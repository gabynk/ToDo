import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../store/actions/todos';

import Header from '../components/Header';
import TaskHome from '../components/TaskHome';
import NewTask from '../components/NewTask';

export default function Home() {
    const [showNewTask, setShowNewTask] = useState(false);

    const tasks = useSelector(state => state.todos.data);

    const dispatch = useDispatch();

    function newTask() {
        setShowNewTask(!showNewTask);
    }

    function addNewTask(task) {
        if(task != "") {
            const today = new Date();

            let year = today.getFullYear();
            let month = today.getMonth() + 1;
            let day = today.getDate();
            let hour = today.getHours();
            let min = today.getMinutes();
    
            month = month < 10 ? `0${month}` : month;
            day = day < 10 ? `0${day}` : day;
            hour = hour < 10 ? `${hour}0` : hour;
            min = min < 10 ? `${min}0` : min;
            
            const newToday = `${year}-${month}-${day}`;
            const hours = `${hour}:${min}`;

            dispatch(addTodo(task, newToday, hours));
        }
        
        setShowNewTask(!showNewTask);
    }

    function deleteTask(id) {
        dispatch(deleteTodo(id));
    }
    
    function changeTextTask(item) {
        console.log(item)
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <Header toNewTask={newTask} />

            {showNewTask === true && (
                <NewTask 
                    toAddNewTask={addNewTask}
                    toCancel={newTask}
                />
            )}

            <View style={styles.contents} >
                {tasks.map((item, index) => (
                    <TaskHome 
                        key={item.id}
                        data={item} 
                        toDelete={deleteTask} 
                        toChangeText={changeTextTask}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },

    contents: {
        flex: 1,
        padding: 10
    }

});