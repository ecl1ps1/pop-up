const closeButton = document.querySelector('.close-button'),
      popUpMenu = document.querySelector('.pop-up-menu'),
      body = document.querySelector('.js-body'),
      closeMenus = document.querySelector('.close-menu'),
      loginButton = document.querySelector('.login-button'),
      loginInput = document.querySelector('.login-input'),
      passwordInput = document.querySelector('.password-input')
const closer = false

closeMenus.onmousedown = function(event) {
    let shiftX = event.clientX - popUpMenu.getBoundingClientRect().left;
    let shiftY = event.clientY - popUpMenu.getBoundingClientRect().top;
    popUpMenu.style.position = 'absolute';
    document.body.append(popUpMenu);
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        popUpMenu.style.left = pageX - shiftX + 'px';
        popUpMenu.style.top = pageY - shiftY + 'px';
    }
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    closeMenus.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      closeMenus.onmouseup = null;
    };
    closeButton.onclick = function() {
        popUpMenu.style.display = 'none'
        body.style.background = 'white'
    }
  };
  
  closeMenus.ondragstart = function() {
    return false;
  };

if(closer==false) {
    popUpMenu.style.display = 'none'
} else {
    popUpMenu.style.display = 'block'
}
// function closeMenu() {
//     popUpMenu.style.display = 'none'
//     body.style.background = 'white'
// }
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
    body.style.background = 'white'
}