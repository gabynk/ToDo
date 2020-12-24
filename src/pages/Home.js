import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../actions/todos';

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
            const month = new Date().getMonth() - 1;
            const days = new Date().getDay();

            const newTask = {
                'id': tasks.length,
                'description': task,
                'data': `${month} / ${days}`,
                'hour': '10:00'
            };

            dispatch(addTodo(newTask));
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
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <TaskHome 
                                data={item} 
                                toDelete={deleteTask} 
                                toChangeText={changeTextTask}
                            />
                        )
                    }}
                />
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