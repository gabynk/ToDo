import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, FlatList } from 'react-native';

import Header from '../components/Header';
import TaskHome from '../components/TaskHome';
import NewTask from '../components/NewTask';

export default function Home() {
    const [showNewTask, setShowNewTask] = useState(false);
    const [tasks, setTaskes] = useState([
        {
            'id': '1',
            'description': 'tarefa',
            'data': '12/20',
            'hour': '10:00'
        },
        {
            'id': '2',
            'description': 'estudos',
            'data': '12/20',
            'hour': '10:00'
        },
    ]);

    function newTask() {
        setShowNewTask(!showNewTask);
    }

    function addNewTask(task) {
        let newTask = {};

        if(task != "") {
            newTask = {
                'id': tasks.length || 0 + 1,
                'description': task,
                'data': '12/20',
                'hour': '10:00'
            }
        }
        console.log(newTask)

        setShowNewTask(!showNewTask);
    }

    function deleteTask(id) {
        const newTasks = tasks.filter(task => {
            return task.id != id; 
        });

        setTaskes(newTasks);
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
                    keyExtractor={item => item.id}
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
        backgroundColor: '#CFCFCF'
    },

    contents: {
        flex: 1,
        padding: 10
    }

})