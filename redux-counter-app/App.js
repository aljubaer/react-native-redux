import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";

import MainApp from "./MainApp";

const initialState = {
	count: 0,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    case 'DECREASE_COUNT':
      return {count: state.count - 1}
    default:
      return state;
  }
  
	return state;
};

const store = createStore(reducer);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MainApp />
			</Provider>
		);
	}
}
