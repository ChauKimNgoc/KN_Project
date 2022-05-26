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

// Chỉa sẻ trải nghiệm
let buttons = document.querySelectorAll('.tablinks');
let contents = document.querySelectorAll('.tab-content');

function showContent(id) {
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    let content = document.getElementById(id);
    content.style.display = 'block';
}


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let id = this.textContent;

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        this.className += "active";
        showContent(id);
    });
}