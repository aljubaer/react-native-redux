import TYPE from '../actions/types';

let nextId = 0;

export default todos = (state=[], action) => {
    switch(action.type) {
        case TYPE.ADD_TODO:
            return [
                ...state,
                {
                    id: nextId++,
                    text: action.text,
                    completed: false
                }
            ]
        case TYPE.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id){
                    return {...todo, completed: true};
                }
                return todo;
            });

        default:
            return state;
    }
}