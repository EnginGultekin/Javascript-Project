// Array forEach Metotu
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp

let arr = [1, 2, 3]
arr.forEach(value, index, array => {
  // işlemler buraya yazılır
}) 
  // index ve array kullanmak opsiyoneldir



const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

// PRODUCTS.forEach(product => console.log(product))
//PRODUCTS.forEach((product,index) => console.log(product, ' --> ' ,index))

PRODUCTS.forEach((product, index, array) => console.log(array[index]))

// atama yaptık aynı anda ekrana yazdırdık
PRODUCTS.forEach((product, index, array) => console.log(array[index] = product + " 1111"))

// atama işlemi, yaptık sadece
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`)
console.log(PRODUCTS)



/*

for (; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] == 'amet') {        // sadece amet'i yazmayacak
    continue
  }
  let liDOM = document.createElement('li')
  liDOM.innerHTML = LOREM_LIST[index]
  ulDOM.appendChild(liDOM)
}

*/

// For ile yaptığımız işlemleri forEach ile yaptık
let ulDOM = document.querySelector('#userList')
PRODUCTS.forEach(item => {
  let liDOM = document.createElement('li')
  liDOM.innerHTML = item
  ulDOM.appendChild(liDOM)
})







