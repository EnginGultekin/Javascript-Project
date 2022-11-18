// Object(Nesne) Nedir ? Nasıl Oluşturulur?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

let arrayObj = [1, 2, 3]
let object1 = {obj: 1}

console.log("arrayObj", typeof(arrayObj))
console.log("object1", typeof(object1))

let item1 = new Object()
let item2 = {}
console.log("item1", typeof(item1))
console.log("item2", typeof(item2))

// Object olusturmak
let item3 = {}
let item4 = new Object()

console.log("object1", object1)



//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba";
console.log(mesaj == başkaBirMesaj);       //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
 mesaj:"merhaba"
}
let başkaBirObje = {
 mesaj:"merhaba"
}
console.log(obje == başkaBirObje);         //false