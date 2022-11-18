// Object Key - Value:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// [key1:1, key1:2, key3:3, ]
let laptop1 = {
  brand: "Apple",
  model:"MacBook Pro",
  "2kg":2,
  // model-name: "MacBook Pro S"  --> Hatalı
  model_name: "MacBook Pro S"
}

console.log(laptop1)

// Dogru Anahtar Bilgisi Olusturmak
console.log(laptop1.brand , laptop1["brand"])
console.log(laptop1.model, laptop1["modle"])
console.log(laptop1['2kg'])


// Anahtar bilgisine yeni deger eklemek
laptop1.brand = 'Mac'
console.log(laptop1)

laptop1['brand'] = 'Mac 11'
console.log(laptop1)


// Yeni Bilgi Eklemek
laptop1.version = "10.15.7"
console.log(laptop1)



// Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)   ************************************
KEYS = Object.keys(laptop1)    // Burda sadece key bilgilerini aldık
console.log('KEYS',KEYS)
console.log(Object.keys(laptop1)) 

KEYS.forEach(keyInfo =>  {
  console.log('key: ', keyInfo) 
  console.log('value: ', laptop1[keyInfo] )
})



// Deger Bilgilerine Ulasmak (values) -> Object.values(item) *************************************
console.log('\n', laptop1)
console.log('\n')

let VALUES = Object.values(laptop1)

VALUES.forEach(valueInfo => console.log('Value: ', valueInfo) )



// tum bilgilerin tek yerde toplanmasi icin object kullanabiliriz ;)

let setting = {
  password: 1234,
  userName: 'user1',
  email: 'engin@mail.com'
}

console.log(setting)


// Kullanılan objenin bir özelliğini silmek

delete setting.email

console.log(setting)


//********************************************************

let state = {
	users:[
		{name: "Brock", age: 25, favoriteColor: "red"},
		{name: "Jessie", age: 17, favoriteColor: "yellow"},
		{name: "James", age: 41, favoriteColor: "blue"},
		{name: "Winnie", age: 18, favoriteColor: "purple"}
	],
	settings:{
		version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
	},
	banList: ["Ash", "Angelica", "Tom", "Jerry"]
}


console.log(state.banList[2])

console.log(state.settings.website)

console.log(state.users[2].favoriteColor)



// ***************************************************** Özet
/*
* Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
* Key / value şeklinde property'leri saklar.
* Key ifadesi string veya sembol olmalıdır.
* Value ifadesi herhangi bir değer alabilir.
* Belli bir property'e erişmek için kullanabileceklerimiz: 
  * Dot notation: obj.property 
  * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.
*/


let person = {
  name: "Jack",
  age: 20
};

document.getElementById("info").innerHTML = JSON.stringify(person); // Bu objenizi bir stringe çevirip demo idsine basacaktır.

let stringObject = JSON.stringify(person);
console.log(stringObject)

let newPerson = JSON.parse(stringObject); 
console.log(newPerson)
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 




