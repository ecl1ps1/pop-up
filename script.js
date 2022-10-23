const closeButton = document.querySelector('.close-button'),
      popUpMenu = document.querySelector('.pop-up-menu'),
      body = document.querySelector('.js-body'),
      closeMenus = document.querySelector('.close-menu'),
      loginButton = document.querySelector('.login-button'),
      loginInput = document.querySelector('.login-input'),
      passwordInput = document.querySelector('.password-input')
const closer = false

if(closer==false) {
    popUpMenu.style.display = 'none'
} else {
    popUpMenu.style.display = 'block'
}
function closeMenu() {
    popUpMenu.style.display = 'none'
    body.style.background = 'white'
}
function openMenu() {
    popUpMenu.style.display = 'block'
    body.style.background ='rgb(192, 192, 192)'
}

popUpMenu.addEventListener('dragend', function(event) {
    console.log(event.pageX, event.pageY);
    popUpMenu.style.position = 'absolute'
    popUpMenu.style.top = event.pageY + 'px'
    popUpMenu.style.left = event.pageX +'px'
}) 

body.addEventListener('dragover', function(event) {
    event.preventDefault()
})

body.addEventListener('drop', function(event) {
    console.log('!!!');
})
async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let content = await response.json()
    content = content.splice(0, 10)
    let key;
    let trueLogin = content[0].username
    let truePassword = content[0].address.city
    if (loginInput.value == trueLogin && passwordInput.value == truePassword) {
        alert('Логин верный');
    } else {
       alert('Логин не верный');
    }
    popUpMenu.style.display = 'none'
}