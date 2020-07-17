import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import AddTodo from "./containers/AddTodo";

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View>
				<AddTodo />
			</View>
		);
	}
}

export default TodoApp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
