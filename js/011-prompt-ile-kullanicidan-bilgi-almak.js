// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt


// içine Text girmemizi isteyen bir kutunun ekranda gözükmesini sağlıyor 

let fullName = prompt("Lütfen Adınızı Giriniz","")
console.log(fullName)

let greeting = document.getElementById('greeting')
greeting.innerHTML += `<small style='color:red;'> ${fullName}</small>`

