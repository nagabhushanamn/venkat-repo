console.log("GM");

// Using DOM API

// document.addEventListener('DOMContentLoaded', function (e) {

//     let box = document.querySelector('.alert-danger');
//     let hideBtn = document.querySelector('.btn-danger');
//     let showBtn = document.querySelector('.btn-success');


//     // Bind Event_Listener

//     hideBtn.addEventListener('click', function (event) {
//         box.style.display = 'none'
//     });
//     showBtn.addEventListener('click', function (event) {
//         box.style.display = ''
//     })
// })


////


$(document).ready(function(){
    let box=$('.alert-danger')
    $('.btn-danger').click(function(){
        box.hide();
    })
    $('.btn-success').click(function(){
        box.show();
    })

    $('input').datepicker();
})
