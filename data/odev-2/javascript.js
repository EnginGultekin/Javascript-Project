let listForm = document.querySelector('#listForm')
listForm.addEventListener('submit', newElement)
let itemList = localStorage.getItem('todo')
    ? JSON.parse(localStorage.getItem('todo'))
    : [];

const data = JSON.parse(localStorage.getItem('todo'));

function newElement(e) {
    e.preventDefault()
    let inputText = document.querySelector('#inputText')
    if (inputText.value) {
        itemList.push(inputText.value)
        localStorage.setItem('todo', JSON.stringify(itemList))
        addItem(inputText.value)
        inputText.value = ''
    } else {
        console.log('Hatalı İşlem')
    }
}


const addItem = (inputText) => {
    let listDOM = document.querySelector('#list')
    let liDOM = document.createElement('li')
    liDOM.classList.add('col-12', 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    liDOM.innerHTML = `
        ${inputText}  
        <span id="iconForDelete"><i class="fa-solid fa-xmark"></i></span>
        `
    listDOM.appendChild(liDOM)
}

data.forEach(item => {
    addItem(item);
});

let deleteListElement = []
deleteListElement = document.querySelectorAll("#iconForDelete");
for (let i = 0; i < deleteListElement.length; i++) {
    deleteListElement[i].addEventListener("click", removeListElement);
}

function removeListElement() {
    this.parentElement.remove();
}

// function isAvailable(inputText) {
//     itemList.forEach(item => {
//         return inputText == item ? false : true

//     })
// }

//localStorage.clear();