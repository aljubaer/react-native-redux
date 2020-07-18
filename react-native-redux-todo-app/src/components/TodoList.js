import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default TodoList = (props) => (
	<View>
		{props.todos.map((todo) => (
            <TouchableOpacity 
                key={todo.id}
                onPress={() => props.toggleTodo(todo.id)}
                >
				<Text
					style={{
						fontSize: 24,
						textDecorationLine: todo.completed
							? "line-through"
							: "none",
					}}
				>
					{todo.text}
				</Text>
			</TouchableOpacity>
		))}
	</View>
);
