// localStorage Bolum Sonu Egzersizi

let container = document.querySelector('.container')
container.style.margin = '50px 800px'

// Number(localStorage.getItem('counter')) bizde gerek kalmadı
let counter = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0
let counterDOM = document.querySelector('#counter')
counterDOM.innerHTML = counter

let increase = document.querySelector('#increase')
let decrease = document.querySelector('#decrease')

increase.addEventListener('click',onEvent)
decrease.addEventListener('click',onEvent)

function onEvent() {
   
  if(this.id == 'increase') counterDOM.innerHTML = ++counter
  else counterDOM.innerHTML = --counter 
  localStorage.setItem('counter',counter)

}