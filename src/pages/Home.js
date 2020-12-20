import React from 'react';
import { StyleSheet, View, Text, StatusBar, FlatList } from 'react-native';

import Header from '../components/Header';
import TaskHome from '../components/TaskHome';

const list = [
    {
        'id': '1',
        'description': 'Tarefa',
        'data': '12/12',
        'hour': '12:12'
    },
    {
        'id': '2',
        'description': 'Estudo',
        'data': '12/15',
        'hour': '15:12'
    },
    {
        'id': '3',
        'description': 'Compra',
        'data': '12/20',
        'hour': '10:00'
    },
]

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <Header />

            <View style={styles.contents} >
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                        return (
                            <TaskHome data={item} />
                        )
                    }}
                />
            </View>
        </View>
    );
};

export default Home;

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