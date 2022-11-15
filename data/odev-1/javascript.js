// *********************************** Odev-1 *********************************** //


let userName = prompt('Lütfen Kullanıcı Adınızı Giriniz')
let guest = document.querySelector('#name')

function getUserName() {
    if (userName == null || userName == '') {
        alert("Kullanıcı adını girmediniz\nLütfen Tamam seçeneğine bastığınızda gelecek ekrana kullanıcı adınızı giriniz", "")
        userName = prompt('Lütfen Kullanıcı Adınızı Giriniz')
        getUserName()
    }
}

function getTime() {
    let date = new Date();
    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    let seconds = addZero(date.getSeconds());

    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    let time = hours + ":" + minutes + ":" + seconds + " " + gunler[date.getDay()]
    document.querySelector('#myClock').innerHTML = time;
}

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

getUserName()
guest.innerHTML = ` ${userName}! `
setInterval(getTime);





