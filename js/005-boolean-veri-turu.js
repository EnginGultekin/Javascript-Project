// ********** Boolean Veri Turu ile Calismak ********** 

// 0 ve 1'i Anlamak ->
let isActive = false  //0
isActive = true  //1 
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)


// 0 ,-0, null, false, NaN, undefined, ("") ->
console.log("0 :", Boolean(0))
console.log("-0 :" , Boolean(-0))
console.log("-0.1 :", Boolean(-0.1))

console.log("0 === 0", Boolean(0===0))

console.log("undefiend :", Boolean(undefined))
console.log("null :", Boolean(null))
console.log("false :", Boolean(false))
console.log("NaN", Boolean(NaN))


console.log("1n", Boolean(1n));
console.log("-1n", Boolean(-1n));
console.log("infinity", Boolean(Infinity));
console.log("{}", Boolean({}));
console.log("Symbol()", Boolean(Symbol()));

console.log("11", Boolean("11") )  // true
console.log("", Boolean("") ) // false


userName = "user"
console.log("User Name: ", Boolean(userName))

// Not: Karar Yapilari Kisminda Tekrar Anlatilacak
console.log("Karar Yapılar: ", Boolean(userName.length > 0))// true