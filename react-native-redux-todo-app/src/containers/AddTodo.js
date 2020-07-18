import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { connect } from 'react-redux';
import { addTodoAction } from "../actions";

class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
    }

	render() {
		return (
			<View style={styles.container}>
				<TextInput
                    onChangeText={(text) => this.setState({text: text})}
                    value={this.state.text}
					placeholder="Eg. new todo"
					style={styles.textInputAddTodo}
				/>
				<TouchableOpacity onPress={() => this.props.addTodo(this.state.text)}>
					<View style={styles.iconAddTodo}>
						<Ionicons name="md-add" size={24} />
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodoAction(text))
})


export default connect(mapStateToProps, mapDispatchToProps) (AddTodo);

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "#fff",
		margin: 20,
		borderWidth: 2,
		borderColor: "blue",
	},
	textInputAddTodo: {
		flex: 1,
		height: 50,
		padding: 10,
	},
	iconAddTodo: {
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		padding: 10,
	},
});
