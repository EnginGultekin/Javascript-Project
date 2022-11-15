// ********** DOM Icinden Oge Secimi **********

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector



/*  Kullanılan mehhodlar

document.getElementsByTagName('h2')
document.querySelector('a#link2')
h2.innerHTML = 'Değişen Yeni Bilgi'
link.style.color = "red"
link.classList.add('btn')

*/

//document.getElementsByTagName

// let h2 = document.getElementsByTagName('h2')
// console.log(h2)
// console.log(h2.title.innerHTML)        ---> Burası şuanlık işimize yaramadı


//document.getElementsById

// let h2 = document.getElementById('title')
// console.log(h2)
// console.log('h2: ', h2.innerHTML)

// h2.innerHTML = 'Değişen Yeni Bilgi'
// console.log('h2 içindeki text', h2.innerHTML)


// // 'querySelector' sadece bir tane seçer 
// let link = document.querySelector('ul#list>li>a')
// console.log('Link: ', link)
// console.log('Link içindeki text: ', link.innerHTML)

// link.innerHTML += ' Değişti'
// console.log('Değiştikten Sonra: ', link.innerHTML)

// link.style.color = "red"
// link.classList.add('btn')


// // 'querySelector' 2. örnek
// let link2 = document.querySelector('a#link2')
// console.log('Link2: ', link2)
// console.log('Link2 içindeki text: ', link2.innerHTML)

// link2.innerHTML += ' Değişti'
// console.log('Değiştikten Sonra: ', link2.innerHTML, "\n")



//  Kendimizin Yaptıkları 

// 1. Get Element By ID   ==>   document objesinin getElementById() metodu

const unicorn = document.getElementById('unicorn');
console.log(unicorn)
console.log(unicorn.innerHTML)


// 2. Get Elements By Tag Name  =>  Elemanları etiket isimlerine göre seçmek için getElementsByTagName() metodu kullanılır.

let paragraf = document.getElementsByTagName('p') 
console.log(paragraf)
console.log(paragraf[0].innerHTML)
console.log(paragraf[1].innerHTML)
console.log(paragraf[2].innerHTML)
console.log(paragraf[3].innerHTML)

// Ayrıca sayfadaki tüm etiketleri bu şekilde getirebilirsiniz.
console.log(  document.getElementsByTagName('*') ) 


// 3. Get Elements By Name  ==> Elemanları isimlerine göre getirmek içim getElementsByName() metodu kullanılır.

// NOT: Unutmayın ki name değeri id'de olduğu gibi biricik bir değer taşımaz birden fazla eleman aynı name değerini taşıyabilir. Eğer biricik (uniq) bir değer vermeniz gerekirse id'yi kullanın.'
let eposta = document.getElementsByName('e-posta')
console.log(eposta)


// 4.Get Elements By Class Name   
// ==>  DOM'da istediğimiz class name'i taşıyan tüm elemanları seçmek için getElementsByClassName() metodunu kullanırız

let animal = document.getElementsByClassName('hava')
console.log('Get Elements By Class Name: ',animal)
console.log(animal[1].innerHTML)

let kartal = document.getElementsByClassName('kartal')
console.log(kartal)
console.log(kartal[0].innerHTML)


// 5. Query Selector  ==> QuerySelector () yöntemi, CSS seçicilere dayalı olarak DOM'dan html elemanlarını seçmenize izin veren iki modern JavaScript yönteminden biridir. Bunu yaparken class için ön ek olarak nokta ".", id'ler için kare "#" kullanmanız gerekir. Sayfada eşleşen ilk elemanı size döndürecektir.

// Ya bu şekilde tanıtırız
let email = document.querySelector('input[name="emobile"]');
console.log('Query Selector: ',email)

// Ya da bu şekilde
email = document.querySelector('#input')
console.log(email)


// 6. Query Selector All  ==>  querySelectorAll() metodu, QuerySelector () metodu ile aynı mantık ile çalışır tek farkı eşleşen ilk elamanı döndürmek yerine eşleşen tüm elemanları bir NodeList objesi olarak döndürmesidir.

let all =  document.querySelectorAll('.kartal, .kedi')
console.log('Query Selector All: ',all)
console.log(all.length)


let inputs = document.getElementById('signup').getElementsByTagName('input')
console.log(inputs)
console.log(inputs.length)
// Ya da
inputs = document.querySelector('#signup').querySelectorAll('input')
console.log(inputs)
console.log(inputs.length)
 






