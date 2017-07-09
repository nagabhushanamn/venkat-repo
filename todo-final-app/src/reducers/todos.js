


export default function todosReducer(state = [], action) {

    console.log('todosReducer');
    switch (action.type) {
         case 'LOADED_ALL_TODOS':
            return [...state, ...action.todos]
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
