// ********** Coklu Kosullarla Calismak **********

// let userName = prompt('Lütfen kullanıcı adınızı giriniz ...', "")
// let age = prompt('Lütfen yaşınızı giriniz ...', "")

let userinfo = document.querySelector('#userInfo')
let info = document.querySelector('#info')

function user() {

    if (userName == null || userName == '') {
        alert('Kullanıcı Adınızı Girmediniz\nLütfen gelecek alana adınızı Giriniz')
        userName = prompt('Lütfen kullanıcı adınızı giriniz ...', "")
        userinfo.innerHTML = 'Kullanıcı Bilgileri : <small>Kullanıcı Bulunamadı</small>'
        info.innerHTML = 'Kullanıcı Bilgileri yetersiz !!!'
        user();
    } else if (age == null || age == '') {
        alert('Yaşınızı Girmediniz.\nLütfen gelecek alana yaşınızı Giriniz.')
        age = prompt('Lütfen yaşınızı giriniz ...', "")
        userinfo.innerHTML = `Kullanıcı Bilgileri : ${userName} ` + '<small>Yaşı Girilmemiş</small>'
        info.innerHTML = 'Kullanıcı Bilgileri yetersiz !!!'
        user();
    } else if (userName && age < 18) {
        alert('Yaşınız bu işelemi yapmak için yeterli değildir.\nBüyüyünce tekrar deneyin.')
        userinfo.innerHTML = `Kullanıcı Bilgileri : ${userName} ${age} `
        info.innerHTML = 'Yaşınız 18 den küçük. Büyüyünce Gelin.'
    } else if (userName && age >= 18) {
        userinfo.innerHTML = `Kullanıcı Bilgileri : ${userName} ${age} `
        info.innerHTML = 'Gerçekten büyüyüp gelmişsiniz. Tebrikler Başvurmaya Hak Kazandınz'
    } else {
        alert('Bak Bunu Kontrol Etmedik Diye Burdasın.\nOMG !!!!!!!!!! ')
        userinfo.innerHTML = 'Kullanıcı Bilgileri : <small>Kullanıcı Bulunamadı</small>'
        info.innerHTML = 'Kullanıcı Bilgileri yetersiz !!!'
    }

}

// user()



// ----------------------- Switch Case 1 ----------------------- //



let hava = "Gunesli";
switch (hava) {
    case "Yagmurlu":
        console.log("Semsiyeni yanina almayi unutma");
        break;
    case "Gunesli":
        console.log("Hafif giyin");
    case "Bulutlu":
        console.log("Disari cik");
        break;
    case "Karlı":
        console.log("Kalin giyin");
        break;
    case "Firtinali":
        console.log("Bir süre disari cikma");
        break;
    default:
        console.log("Bilinmeyen hava durumu:", hava);
}


// ----------------------- Switch Case 2 ----------------------- //

let islem = function (a, b, operator) {
    switch (operator) {
        case 'topla':
            return a + b;
        case 'cikar':
            return a - b;
        case 'carp':
            return a * b;
        case 'bol':
            return a / b;
        default:
            return 'Tanimlanmamis islem';
    }
};
console.log(islem(23, 14, 'topla'));  // 37
console.log(islem(10, 3, 'mod'));     // Tanimlanmamis islem

