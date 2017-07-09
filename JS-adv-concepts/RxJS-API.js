



/*

    limittions of Promise API
    

    -> resolve/reject can happen only once


*/


var Rx = require('rxjs/Rx');


// let count = 4
// var observableStream =
//     Rx.Observable.create(function (observer) {
//         observer.next(1);
//         observer.next(2);
//         observer.next(3);
//         let intRef=setInterval(() => {
//             observer.next(count);
//             count++;
//             if(count===10)clearInterval(intRef)
//         }, 100);
//     }).map(x => x % 2 == 0?x:'');
    
// observableStream.subscribe(
//     (value) => console.log(value),
//     (error) => console.log(error),
//     (status) => console.log(status)
// );

//------------------------------------------------------------------------


let inp=document.querySelector('#search');
let searchStream=Rx.Observable.fromEvent(inp,'keyup').debounceTime(3000).map(e=>e.target.value);


searchStream.subscribe(v=>console.log(v));