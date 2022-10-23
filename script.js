const closeButton = document.querySelector('.close-button'),
      popUpMenu = document.querySelector('.pop-up-menu'),
      body = document.querySelector('.js-body'),
      closeMenus = document.querySelector('.close-menu'),
      loginButton = document.querySelector('.login-button'),
      loginInput = document.querySelector('.login-input'),
      passwordInput = document.querySelector('.password-input')
const closer = false

popUpMenu.onmousedown = function(event) {
    popUpMenu.style.position = 'absolute';
    popUpMenu.style.zIndex = 1000;
    document.body.append(popUpMenu);
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        popUpMenu.style.left = pageX - popUpMenu.offsetWidth / 10 + 'px';
        popUpMenu.style.top = pageY - popUpMenu.offsetHeight / 10 + 'px';
    }
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    popUpMenu.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      popUpMenu.onmouseup = null;
    };
  };
  popUpMenu.ondragstart = function() {
    return false;
  };

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

closeMenus.addEventListener('dragend', function(event) {
    console.log(event.pageX, event.pageY);
    popUpMenu.style.position = 'absolute'

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