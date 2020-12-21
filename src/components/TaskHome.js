import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default props => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => { props.toChangeText(props.data) }}>
            <View style={styles.border} />

            <View style={styles.contents}>
                <View style={styles.descriptionView}>
                    <Text style={styles.description}> {props.data.description} </Text>
                </View>

                <View style={styles.contentData}>
                    <Text style={styles.descriptionData}> {props.data.data} </Text>
                    <Text style={styles.descriptionData}> {props.data.hour} </Text>
                </View>

                <TouchableOpacity onPress={() => { props.toDelete(props.data.id) } }>
                    <Feather name='more-vertical' size={23} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 50,
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#ffadad'
    },

    border: {
        flex: 1,
        maxWidth: 10,
        backgroundColor: '#ffdddd'
    },
    contents: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    descriptionView: {
        flex: 3,
    },
    description: {
        fontSize: 18
    },

    contentData: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionData: {
        fontSize: 14
    }
})