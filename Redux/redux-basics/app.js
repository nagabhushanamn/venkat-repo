
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import $ from 'jquery';


// state => count & todos

//-----------------------------------------------------------

// Action Creators

function increment(value) {
    return { type: 'INCREMENT', value }
}

function decrement(value) {
    return { type: 'DECREMENT', value }
}



function addTodo(text) {
    return { type: 'ADD_TODO', text }
}

function addTodoAsync(text) {
    return function (dispatch) {

        // async operation

        // dispatch action ==> request begin ( optional )

        // api call
        let url = "http://0.0.0.0:3000/api/todos";
        $.ajax(url, {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ title: text }),
            success: function (resp) {
                dispatch({ type: 'ASYNC_ADD_TODO', todo })
            }
        })


    }
}


function deleteTodo(id) {
    return { type: 'DELETE_TODO', id }
}
function completeTodo(id) {
    return { type: 'COMPLETE_TODO', id }
}
function completeALL() {
    return { type: 'COMPLETE_ALL' }
}
function EditTodo(id, text) {
    return { type: 'EDIT_TODO', id, text }
}
function clearCompleted() {
    return { type: 'CLEAR_COMPLETED' }
}




//-----------------------------------------------------------

// Reducers

function counterReducer(state = 0, action) {
    console.log('counterReducer');
    switch (action.type) {
        case 'INCREMENT':
            return state + action.value;
        case 'DECREMENT':
            return state - action.value;
    }
    return state;

}

function todosReducer(state = [], action) {

    console.log('todosReducer');
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Math.random(), title: action.text, completed: false }]
        case 'ASYNC_ADD_TODO':
            return [...state, action.todo]
        case 'DELETE_TODO':
            return state.filter(todo => !todo.id === action.id)
        case 'COMPLETE_TODO':
            return state.map(todo => todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo)
        case 'EDIT_TODO':
            return state.map(todo => todo.id === action.id ? Object.assign({}, todo, { title: action.text }) : todo)
        case 'CLEAR_COMPLETED':
            return state.map(todo => !todo.completed)
        case 'COMPLETE_ALL':
            let allCompleted = state.every(todo => todo.completed)
            return state.map(todo => Object.assign({}, todo, { completed: !allCompleted }))
    }
    return state;


}

//-----------------------------------------------------------
let rootReducer = combineReducers({
    count: counterReducer,
    todos: todosReducer
})
//-----------------------------------------------------------

// Store

// let store = createStore(rootReducer,
//     {
//         count: 10,
//         todos: [
//             { id: 1, title: 'todo1', completed: true }
//         ]
//     },
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
);

//-----------------------------------------------------------


// Client/View

let resultSpan = document.querySelector('#result');
store.subscribe(function () {
    let currentState = store.getState();
    // console.log(currentState.count);
    resultSpan.innerHTML = currentState.count;
})


// store.dispatch(increment(10));
// store.dispatch(increment(10));
// store.dispatch(decrement(10));


document.querySelector('.inc')
    .addEventListener('click', function () {
        store.dispatch(increment(1)) // sync Actions
    })


document.querySelector('.dec')
    .addEventListener('click', function () {
        store.dispatch(decrement(1))
    })


document.querySelector('#addBtn')
    .addEventListener('click', function () {
        let text = document.getElementById('new-todo').value;
        //store.dispatch(addTodo(text)) // sync action
        store.dispatch(addTodoAsync(text)) // async action


    })

//-----------------------------------------------------------