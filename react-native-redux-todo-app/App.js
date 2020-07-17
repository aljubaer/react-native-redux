import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';

import store from './src/store';

import TodoApp from './src/TodoApp';

export default function App() {
  return (
    <Provider store={store}>
        <TodoApp />
    </Provider>
  );
}


