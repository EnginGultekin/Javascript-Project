// Functions Bolum Sonu Egzersizi

let container = document.querySelector('.container')
container.style.margin = '20px 800px'

let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

// Ya Bu 
increaseDOM.addEventListener('click',clickEvent)
decreaseDOM.addEventListener('click',clickEvent)

function clickEvent() {
    if(this.id == 'increase') counterDOM.innerHTML = ++counter
    else counterDOM.innerHTML = --counter
}

/// Ya da Bu
// increaseDOM.addEventListener('click',increaseFunc)
// function increaseFunc() {
//     counterDOM.innerHTML = ++counter
// }

// decreaseDOM.addEventListener('click',decreaseFunc)
// function decreaseFunc() {
//     counterDOM.innerHTML = --counter
// }
