import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default props => {
    const [text, setText] = useState("");

    function toDay() {
        const year = new Date().getFullYear();
        const month = new Date().getMonth() - 1;
        const days = new Date().getDay();

        const today = `${days} / ${month} / ${year}`

        return today;
    }

    return (
        <View style={styles.container}>
            <View style={styles.border} />

            <View style={styles.contents}>
                <View style={styles.date}>
                    <Text> { toDay() } </Text>
                </View>

                <View>
                    <TextInput 
                        onChangeText={text => setText(text)}
                        value={text}
                        underlineColorAndroid="#000"
                    />
                </View>

                <View style={styles.buttons}>
                    <Button title="ADD" color="#65ed93" onPress={() => { props.toAddNewTask(text) }} />
                    <Button title="CANCEL" color="#fc6767" onPress={() => { props.toCancel() }} />
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