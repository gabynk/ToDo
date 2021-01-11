import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Modal, StatusBar, ScrollView } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../store/reducers/todosSlice';
import { addTodoAction } from '../store/actions/todosActions';

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

    const addNewTask = async (task) => {
        setShowNewTask(!showNewTask);
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

            await dispatch(addTodoAction(task, newToday, hours));
        }
    }

    function deleteOneTask(id) {
        dispatch(deleteTodo({ id: id }));
    }
    
    function changeTextTask(item) {
        console.log(item)
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <Header toNewTask={newTask} />

            <Modal 
                animationType="slide"
                transparent={true}
                visible={showNewTask}
            >
                <NewTask 
                    toAddNewTask={addNewTask}
                    toCancel={newTask}
                />
            </Modal>

            <ScrollView style={styles.contents} >
                {tasks.map((item, index) => (
                    <TaskHome 
                        key={item.id}
                        data={item} 
                        toDelete={deleteOneTask} 
                        toChangeText={changeTextTask}
                    />
                ))}
            </ScrollView>
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