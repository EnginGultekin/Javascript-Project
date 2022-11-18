// array - dizilerle calismak

// Array Oluşturmak
let domain = 'kodlama'
let isActive = false
let items = [1, 2, 3, isActive, domain]

console.log(items)

let emptyArray = []  // boş liste

// Array içerisindeki eleman/oge sayisini öğrenmek
console.log(items.length)

// ekranda göstermek için
//document.querySelector('#info').innerHTML = items.length

// Array içindeki ilk elamanın çağırılması
console.log( items[0]  )

// Array içerisindeki son elamanın çağırılması
console.log( items[items.length-1] )

// Arrayin içindeki ortadaki elamanın çağırılması
console.log( 'ortadaki elaman', items[ Math.floor((items.length-1)/2) ] )

// Değişken içindeki bilginin Array olup olmadığını kontrol edilmesi   ' isArray '
console.log(typeof(items))  // object olarak çıktı veriyor

console.log(
    Array.isArray(items)
)

// hangileri  isarray -> true verir ?

console.log( "[]", Array.isArray( [] ) )
console.log( "1", Array.isArray( 1 ) )
console.log( "true", Array.isArray( true ) )


// Array elemanlarını yazdırmnak
let arr = [1,2,3,"dört","beş"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// iki boyutlu array
let array = [1,2,3,["dört","beş","altı"],7,8];
console.log('iki boyutlu: ', array[3][0]);