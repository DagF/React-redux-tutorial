import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';


const initialState = {
	VisibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
};

function todos (state = [], action) {
	switch (action.type) {
		
	case ADD_TODO:
		//copy state's todos, add new todo from action at end of todos-list
		return [
				...state,
				{
					text: action.text,
					completed: false
				}
			];

	case TOGGLE_TODO:
		return state.todos.map((todo, index) => {
			if (index === action.index) {
				//change todo-object if index matches
				return Object.assign({}, todo, {
					completed: !todo.completed
				});
			}
			return todo;
		});
		
	default:
		return state;
	}
}

function visibilityFilter (state = VisibilityFilters.SHOW_ALL, action){
	switch (action.type) {
		
    case SET_VISIBILITY_FILTER:
		return action.filter;
		
	default:
		return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;

