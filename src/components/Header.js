import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Feather name='menu' size={23} />
            </TouchableOpacity>

            <Text style={styles.title}>To Do</Text>

            <TouchableOpacity>
                <Feather name='plus' size={23} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#FFF'
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})