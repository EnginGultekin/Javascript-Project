// ********** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir


let firstName = 'Lorem'

function greetings(firstName = '', lastName = '') {   // default parametre alıyor
    //console.log(`Halooo ${firstName ?? ''}`)
    //console.log(`Halooo ${firstName ? firstName : ''}`)

    console.log(`Halooo ${firstName}, ${lastName}`)
}

console.log(firstName)
greetings()   // fonskyona parametre yollamadık
greetings('Apple') // fonskyona parametre yolladık
greetings('Apple', 'Bananna') // fonskyona parametre yolladık




function greeting2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let info = greeting2("Engin", "Gültekin")
console.log(info)


function domIdInfo(id, info) {
    let domObj = document.querySelector(`#${id}`)
    domObj.innerHTML = info
}

// domIdInfo('greeting' , 'Merhabalar Ben ...')
// Fonksyom içinde fonksyon kullandık
domIdInfo('info', greeting2("Engin", "Gültekin"))

let htmlInfo = `<span style='color:red' > Color REDDDDDD Done </span>`
domIdInfo('info', htmlInfo)

