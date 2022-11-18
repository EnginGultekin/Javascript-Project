// INPUT icindeki degeri(value) almak

let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault()  // default işlemi engelledik
    console.log('işlem gerçekleşti')

    let scoreDOM = document.querySelector('#score')
    console.log(scoreDOM.value)
    localStorage.setItem('score',scoreDOM.value)
}


