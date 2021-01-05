import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default props => {
    const [text, setText] = useState("");
    const [today, setToday] = useState("");

    useEffect(() => {
        const today = new Date();

        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        const newToday = `${day} / ${month} / ${year}`;

        setToday(newToday);
    }, []);

    const handleAddTask = () => {
        props.toAddNewTask(text.toString());
    }

    const handleCancel = () => {
        props.toCancel();
    }

    return (
        <View style={styles.container}>
            <View style={styles.border} />

            <View style={styles.contents}>
                <View style={styles.date}>
                    <Text>{today}</Text>
                </View>

                <View>
                    <TextInput 
                        onChangeText={text => setText(text)}
                        value={text}
                        underlineColorAndroid="#000"
                    />
                </View>

                <View style={styles.buttons}>
                    <Button title="ADD" color="#65ed93" onPress={handleAddTask} />
                    <Button title="CANCEL" color="#fc6767" onPress={handleCancel} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 100,
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#fff',
        marginTop: 10
    },

    border: {
        flex: 1,
        maxWidth: 10,
        backgroundColor: '#aff'
    },
    contents: {
        flex: 1,
        paddingHorizontal: 10
    },
    
    date: {
        flex: 0.5,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})