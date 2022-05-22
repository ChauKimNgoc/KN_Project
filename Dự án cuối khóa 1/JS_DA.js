// FORM LOGIN

let btnUser = document.querySelector('.fa-user')
btnUser.addEventListener("click", function() {
    document.querySelector('.form-form').classList.toggle('active')
})

let btnExit = document.querySelector('.fa-x')
btnExit.addEventListener("click", function() {
    document.querySelector('.form-form').classList.toggle('active')
})

// MENU

let btnMenu = document.querySelector('.fa-bars')
btnMenu.addEventListener("click", function() {
    document.querySelector('.header-top ul').classList.toggle('active')
})