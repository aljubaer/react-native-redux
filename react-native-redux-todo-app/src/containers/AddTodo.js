import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Eg. new todo" style={styles.textInputAddTodo}/>
                <TouchableOpacity onPress={() => alert("on press works")}>
                    <View style={styles.iconAddTodo}>
                        <Ionicons name="md-add" size={24} />

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AddTodo;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
        backgroundColor: "#fff",
        margin: 20,
        borderWidth: 2,
        borderColor: 'blue',
    },
    textInputAddTodo: {
        flex: 1,
        height: 50,
        padding: 10
    },
    iconAddTodo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        padding: 10
    }
});
