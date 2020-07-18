import TYPE from './types';

let nextId = 0;

export const addTodoAction = (text) => {
    return {
        id : nextId++,
        text,
        type: TYPE.ADD_TODO
    }
}

export const toggleTodoAction = (id) => {
    return {
        id,
        type: TYPE.TOGGLE_TODO
    }
}