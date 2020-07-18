import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodoAction } from '../actions';

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => {
        return dispatch(toggleTodoAction(id))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);