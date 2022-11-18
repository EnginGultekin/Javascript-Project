// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events


let header = document.querySelector('#header')
header.addEventListener('click', domClick)


function domClick() {
    console.log('Tıklandı')
    console.log(this.innerHTML)
    this.style.color = this.style.color == 'red' ? 'black' : 'red'
}


// let header2 = document.querySelector('#header')
// header2.addEventListener('mouseover',domHover)


// function domHover() {
//     console.log('Renk Değişti')
//     this.style.color = this.style.color == 'red' ? 'black' : 'red'
// }


// ******************************** 1. Method ********************************//  Tek Tıklama

let myButton = document.querySelector('#button')
myButton.style.margin = '2px 400px'

myButton.addEventListener('click', clickMe)

function clickMe() {
    myButton.style.color = myButton.style.color == 'white' ? 'black' : 'white'
    myButton.style.background = myButton.style.background == 'black' ? 'white' : 'black'
}


// ******************************** 2. Method ********************************//  Çift Tıklama

let myButton2 = document.querySelector('#button2')
myButton2.style.margin = '15px 400px'

myButton2.addEventListener('dblclick', clickMe2)

function clickMe2() {
    myButton2.style.color = myButton2.style.color == 'red' ? 'yellow' : 'red'
    myButton2.style.background = myButton2.style.background == 'yellow' ? 'red' : 'yellow'
}


// ******************************** 3. Method ********************************//  Klavye hareketleri


let cut = document.querySelector('#cut')
cut.style.margin = '15px 400px'

cut.addEventListener('cut', cuttingFunction)

function cuttingFunction() {
    console.log('CTRL+X Çalıştırıldı')
}



// ******************************** 4. Method ********************************//  Form Etkinlikleri

let formActivity = document.querySelector('#selectColor')
formActivity.style.margin = '20px 400px'

let color

let isSelectedColor = document.querySelector('#select')
isSelectedColor.addEventListener('change', changeColor)

function changeColor() {

    color = isSelectedColor.value
    console.log(color)
}

let submitColor = document.querySelector('#sub')
submitColor.addEventListener('click', inputClick)

function inputClick() {
    formActivity.style.background = color
}


let input = document.querySelector('#fname')
input.addEventListener('input',inputFunc)

function inputFunc(){
    alert('İnput Çalıştı')
}




// ******************************** 5. Method ********************************// Kabarcıklanma Etkinliği(Event Bubbling)

let container = document.querySelector('.container')
container.style.margin = '50px 800px'
container.addEventListener('click', function () {
    console.log('cerceve');
})


const selectBoxx = document.querySelector('#select2');
selectBoxx.addEventListener('change', function () {
    console.log("selectBox");
})


const form = document.querySelector('.inputText');
form.addEventListener('click', function () {
    console.log("form");
})

const buttonw = document.querySelector('#button3');
buttonw.addEventListener('click', function () {
    console.log("button");
})



// ******************************** 6. Method ********************************// Yakalama Etkinliği(Event Capturing)

//  element.addEventListener(event, function, useCapture);
/*
useCapture parametresi "True" ve "False" değerleri almaktadır. Diğer tüm kullanımı kabarcıklanma etkinliği ile aynıdır.
event.stopPropagation()

Bir etkinliğin özelliğini durdurmak için kullanılır. Bir fonksiyon parametresi olarak girilen "event" e bu etkinlik atanarak kullanılır.

Kullanımı:  event.stopPropagation();

*/