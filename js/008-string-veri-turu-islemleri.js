// ********** String Veri Turu Islemleri ********** 
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = 'engingultekin1071@gmail.com'
let firstName = 'Engin'
let lastName = 'GÜLTEKİN'

/*

    length,
    [0],
    chartAt(0) index numarasına göre karakter bulma, 
    toUpperCase(),
    toLowerCase(),
    search(''),
    slice(0,10),
    slice(5) 5 ten sonrasını almasına yarar, 
    indexOf(''),
    lastIndexxOf  tek fark aranan kelime birden fazla geçiyor ise en son eşleşmeden gelen index numarasını döndürür,
    replace(""," "),
    includes('@'),
    startsWidth(''),
    endsWidth(''),
    concat(' ' , '...') metin birleştirme,
    charCodeAt(0) UniCode bulma,
    split(',') virgülden ayır ,

*/


// string karakter sayisi -> length
console.log(email.length)

// Ilk Karakteri Bulmak -> [0]:
console.log('First Charecter' ,firstName[0])
console.log(firstName.charAt(0))

// 18. karakteri Bul
console.log('Mail:', email[17])

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase()
console.log(firstName)

console.log(lastName.toLowerCase())

// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log('Aranan Karakter Search index verir', email.search('@'))
console.log('Yukardakini denersek bize bunu verecektir', email[17])

console.log('Aranan olmaması gereken ', email.search('ı'))  // olmayan bir şey -1 döner
console.log('Aranan ve olan ', email.search('i')) // bulunduğu index döner

// belli bir yere kadar al -> slice :  (domain bilgisi) 
console.log("0 dan 10 a kadar al-- ", email.slice(0,10))
console.log('17 ten sonrasını al-- ', email.slice(17))

// @ işaretinden sonrasını al
let DOMAIN = email.slice( email.search('@') +1 )
console.log(DOMAIN)

// NOOT : email.search('.') bulamıyor o yüzden indexof kullandık
DOMAIN = email.slice( email.search('@')+1 , email.indexOf('.')) // sadece gmail kismini aldik
console.log(DOMAIN)


// bilgiyi degistir -> replace :
let replaceString = email.replace('gmail.com', 'hotmail.org') 
console.log( replaceString )


// istedigim bilgi var mi ? -> includes :
console.log(email.includes('@'))

console.log(email.includes('ı'))


// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log('com ile bitiyor mu-- ', email.endsWith('com'))
console.log('gmail.com ie bitiyor mu-- ', email.endsWith('gmail.com'))

console.log('eng ile başlayan-- ', email.startsWith('eng'))
console.log('eg ile başlayan-- ', email.startsWith('eg'))


// Ilk Harflerini Buyuk Yapmak

firstName = 'EngİN'
lastName = 'gülTEKin'

let fullName = 
`
${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()} 

`
console.log(fullName)


// Concat metin birleştirme
firstName = 'Eng'
lastName = 'Leng'

concatString = firstName.concat(',',lastName)

console.log( 'Birleştirme Sonucu: ', concatString  )


//charCodeAt – İndex Numarasına Göre Karakterin Unicode Değerini Bulma
console.log("Unicode: ", firstName.charCodeAt(0))

//Split metodu ile istenilen metin diziye çevrilebilir. Kullanılan parametre ile metnin nasıl parçalanacağı belirtilir.
// concatString = Eng,Leng
let splitString = concatString.split(',')
console.log("Split String: ", splitString )