// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


// localStorage icerisine bilgi kaydetmek:
//let email = "hakanyalcinkaya@gmail.com"
//localStorage.setItem('userEmail', email) // -> anahtar, deger yapisi kullanilir(key, value)

// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
//let localStorageEMailInfo = localStorage.getItem('userEmail') // daha once atadigimiz anahtar bilgisi

//console.log(localStorageEMailInfo)

// localStorage icerisinden istenilen Key bilgisinin silinmesi:
//localStorage.removeItem('userEmail') // key bilgisini yazarak silebiliriz..

//localStorage.clear(); // Bu satırda her şeyi siler 



// ********************************************** Example **********************************************



let container = document.querySelector('.small-container')
container.style.margin = '50px 800px'


const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');

const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [];

// Kaydettik
localStorage.setItem('items', JSON.stringify(itemsArray));
// data ya çektik
const data = JSON.parse(localStorage.getItem('items'));


// Bu Fonksyon yeni bir li oluşturup Listeye eklemee yapan kısım 
const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}


// Burası ekle butonunu dinlediği yer
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // inputa girilen değerin itemsArray'a pushlanması
    itemsArray.push(input.value);
    // Locale kaydedilmesi  
    localStorage.setItem('items', JSON.stringify(itemsArray));
    // Yukardaki liMarker fonskyonu ile yeni li satırı oluşturduk
    liMaker(input.value);
    // sonra içini  boşalttık
    input.value = "";
});



data.forEach(item => {
    liMaker(item);
});


// clear buttonunu dinliyoruz 
button.addEventListener('click', function () {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    itemsArray = [];
});