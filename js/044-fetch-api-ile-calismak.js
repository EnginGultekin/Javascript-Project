// fetch api ile calismak
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// JSON dosyadan veri cekmek:
fetch("data/settings.json").then(
  response => response.json()
).then(responseJson => {
  console.log(responseJson)
  console.log(responseJson.userName)
})


let listDOM = document.querySelector('#userList')

// API üzerinden veri çektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
  response => response.json()
).then(responseJson => {
  console.log('Just one: --> ', responseJson[0])
  console.log('All Of them : -->', responseJson)
  responseJson.forEach(item => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = item.title
    listDOM.appendChild(liDOM)
  });
})


// ******************************* 1. Uygulama ******************************* //

// fetch("https://jsonplaceholder.typicode.com/users").then(
//   response => response.json()
// ).then(
//   responseJson => console.log("Name: --> ", responseJson)
// ).catch(
//   e => console.log('ERROR: ',e)
// )


// ******************************* 2. Uygulama ******************************* //

// fetch("https://jsonplaceholder.typicode.com/comments").then(
//   response => response.json()
// ).then(
//   responseJson => responseJson.forEach(item => console.log('Mail: --> ',item.email))
// ).catch(
//   e => console.log(e)
// )



// ******************************* POST Method ******************************* //

let payload = {
  title: "Blog Title",
  body: "lorem ipsum",
  userId:1
}
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  body: JSON.stringify(payload),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err));