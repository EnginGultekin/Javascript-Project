// FORM SUBMIT:

let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault()  // default işlemi engelledik
    console.log('işlem gerçekleşti')
}


// ************************************************   ************************************************ //


/* input type : 

    text
    password
    radio
    checkout
    button
    submit
    reset
    color
    date
    email
    number
    range
    search
    time

*/


let formDom2 = document.querySelector('#userForm2')
formDom2.addEventListener('submit', handleSubmit)
formDom2.addEventListener('change', handleChange)
let username
let password

function handleSubmit(e) {
    e.preventDefault();
    console.log("username:" + username + "-" + "password:" + password);
}
function handleChange(e) {
    if (e.target.name === "username") {
        username = e.target.value;
        console.log(username)
    }
    if (e.target.name === "password") {
        password = e.target.value;
        console.log(password)
    }
}
