import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

class MainApp extends Component {

	render() {
		return (
			<>
				<StatusBar style="auto" />

				<View style={styles.container}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => this.props.increaseCount()}
					>
						<Text style={styles.text}>Increase</Text>
					</TouchableOpacity>

					<Text style={styles.text}>{this.props.count}</Text>

					<TouchableOpacity
						style={styles.button}
						onPress={() => this.props.decreaseCount()}
					>
						<Text style={styles.text}>Decrease</Text>
					</TouchableOpacity>
				</View>
			</>
		);
	}
}

function mapDispachToProps(dispach){
    return {
        increaseCount: () => dispach({type: 'INCREASE_COUNT'}),
        decreaseCount: () => dispach({type: 'DECREASE_COUNT'})
    }
}

function mapStateToProps(state) {
	return {
		count: state.count,
	};
}

export default connect(mapStateToProps, mapDispachToProps)(MainApp);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: 40,
		width: "50%",
		borderRadius: 4,
		borderColor: "blue",
		borderWidth: 2,
		margin: 20,
	},
	text: {
		fontSize: 24,
	},
});
