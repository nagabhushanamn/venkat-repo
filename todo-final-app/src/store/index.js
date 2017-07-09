import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'
import $ from 'jquery';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk),
    // other store enhancers if any
);

let defaultState = {
    todos: [
        //{id:1,title:'Go Home',completed:false}
    ]
}



const store = createStore(rootReducer, defaultState, enhancer);


let apiUrl = "http://localhost:3000/api/todos";

$.ajax(apiUrl, {
    method: 'GET',
    success: function (todos) {
        store.dispatch({ type: 'LOADED_ALL_TODOS', todos })
    }
})

export default store;

