

// function foo(b) {
//   var a = 10;
//   return a + b + 11;
// }

// function bar(x) {
//   var y = 3;
//   return foo(x * y);
// }

// console.log(bar(7));



// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz()




// function foo(){throw new Error('oops')}
// function bar(){foo()}
// function baz(){bar()}
// baz()


// function foo(){foo()}
// foo();




// function longRunning(){
//     let i=0;
//     while(i<10){console.log('long..');i++}
// }

// function shortRunning(){
//     console.log('short...');
// }

// longRunning();
// shortRunning();




/*

    <button class="veg">Veg </button>
    <button class="nonveg">Non Veg </button>

*/

console.log('start...');

// $.on('.veg','click',function vegHandler(e){
//     console.log('handling click event on veg elements');
// });

// $.on('.nonveg','click',function nonVegHandler(e){
//     console.log('handling click event on nonveg elements');
// });
// console.log('cont with other work..');

setTimeout(function(){
    console.log('Hello..');
},5000)

function longRunning(){
    let i=0;
    while(i<10){console.log('long..');i++}
}
longRunning();