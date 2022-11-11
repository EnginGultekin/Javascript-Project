// ********** Veri Turunu Ogrenmek ve Veri Turu Donusumleri ********** 



/*
    typeof
    parseInt
    parseFloat
    Number

    Bir başka şekilde 
        isInteger( ), 
        isFinite( ) veya 
        isNaN( )  is Not a Number kullanarak da kontrol sağlayabiliriz.

*/


// veri turunu ogrenmek typeof:
let price = 100
let stringPrice = "100"
let hasPassword = true 

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)


// string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11"
console.log("number1 type: " ,typeof(number1), number1)

number1 = parseInt(number1)
console.log("number1 type: ", number1 , typeof(number1))



let number2 = "12px"
console.log("number2 type: " ,typeof(number2), number2)

number2 = parseInt(number2)
console.log("number2 type: ", number2 , typeof(number2))


let number3 = "px14"
console.log("number2 type: " ,typeof(number3), number3)

number3 = parseInt(number3)
console.log("number2 type: ", number3 , typeof(number3))


// tüm sayıları alır ama "22e" tarzı sayı dışında bir karakter olunca çalışmaz 
let number4 = "15.3"
console.log("number2 type: " ,typeof(number4), number4)

number4 = Number(number4)
console.log("number2 type: ", number4 , typeof(number4))



let number5 = "11.3px"
console.log("number2 type: " ,typeof(number5), number5)

number5 = parseFloat(number5)
console.log("number2 type: ", number5 , typeof(number5))


// number veri tipinden string'e donusturmek:

let numberString = 55
console.log("numberString type: " ,typeof(numberString), numberString)

numberString = numberString.toString()
console.log("numberString type: " ,typeof(numberString), numberString)
