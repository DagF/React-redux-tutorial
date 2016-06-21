import { createStore } from 'redux';
import todoApp from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';

let store = createStore(todoApp, window.STATE_FROM_SERVER);

console.log(store.getState());

//Every time state changes, log it
let unsubscribe = store.subscribe(() =>	console.log(store.getState()));

//Dispatch some actions
store.dispatch(addTodo('Learn redux'));
store.dispatch(addTodo('Learn react'));
store.dispatch(addTodo('Do stuff'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(VisibilityFilters.SHOW_COMPLETED);

unsubscribe();
