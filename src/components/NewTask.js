import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import { getNowDate } from '../utils/config';
import { maskDateBr } from '../utils/mask';

export default props => {
    const [text, setText] = useState("");
    const [today, setToday] = useState("");

    useEffect(() => {
        let day = getNowDate();
        day = maskDateBr(day);
        setToday(day);
    }, []);

    const handleAddTask = () => {
        props.toAddNewTask(text);
    }

    const handleCancel = () => {
        props.toCancel();
    }

    return (
        <View style={styles.modal}>
            <View style={styles.container}>
                <View style={styles.border} />

                <View style={styles.contents}>
                    <View style={styles.date}>
                        <Text>{today}</Text>
                    </View>

                    <View style={styles.input}>
                        <TextInput
                            onChangeText={text => setText(text)}
                            value={text}
                            underlineColorAndroid="#000"
                            maxLength={65}
                        />
                    </View>

                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <Button title="ADD" color="#65ed93" onPress={handleAddTask} />
                        </View>
                        <View style={styles.button}>
                            <Button title="CANCEL" color="#fca9a9" onPress={handleCancel} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    container: {
        flex: 1,
        maxHeight: 150,
        flexDirection: 'row',
        backgroundColor: '#efefef',
        marginHorizontal: 10,
        borderRadius: 10
    },

    border: {
        flex: 1,
        maxWidth: 10,
        backgroundColor: '#FFDDDD',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    contents: {
        flex: 1,
        paddingHorizontal: 10
    },

    date: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    input: {
        flex: 1
    },
    buttons: {
        flex: 1,
        flexDirection: 'row'
    },

    button: {
        flex: 1
    }
})