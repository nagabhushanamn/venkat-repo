
import $ from 'jquery';

export function addTodo(text) {
    return { type: 'ADD_TODO', text }
}

export function addTodoAsync(text) {
    return function (dispatch) {

        // async operation

        // dispatch action ==> request begin ( optional )

        // api call
        let url = "http://0.0.0.0:3000/api/todos";
        $.ajax(url, {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ title: text }),
            success: function (todo) {
                dispatch({ type: 'ASYNC_ADD_TODO', todo })
            }
        })


    }
}


export function deleteTodo(id) {
    return { type: 'DELETE_TODO', id }
}
export function completeTodo(id) {
    return { type: 'COMPLETE_TODO', id }
}
export function completeALL() {
    return { type: 'COMPLETE_ALL' }
}
export function editTodo(id, text) {
    return { type: 'EDIT_TODO', id, text }
}
export function clearCompleted() {
    return { type: 'CLEAR_COMPLETED' }
}


