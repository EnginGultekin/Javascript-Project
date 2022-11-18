// FORMLARLA CALISMAK: Bolum Sonu Egzersizi

/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/


let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)

const alertDOM = document.querySelector('#alert')
const alertfunction = (title, message, className = 'warning') => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()

    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ''
        SCORE.value = ''
    }
    else {
        console.log('dsaf')
        alertDOM.innerHTML = alertfunction(
            'Başlık Bilgisi',
            'Eksik Bilgi Girdiniz',
            'danger'
        )
    }
}


/* 

<ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
        A first item<span class="badge bg-primary rounded-pill">14</span>
    </li>
</ul>

*/
const userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    liDOM.innerHTML =
        `${userName}  
        <span class="badge bg-primary rounded-pill">${score}</span>
        `
    userListDOM.appendChild(liDOM)
}