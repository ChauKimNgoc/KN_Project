// FORM LOGIN

let btnUser = document.querySelector('.fa-user')
btnUser.addEventListener("click", function() {
    document.querySelector('.form-form').classList.toggle('active')
})

let btnExit = document.querySelector('.fa-x')
btnExit.addEventListener("click", function() {
        document.querySelector('.form-form').classList.toggle('active')
    })
    // Tìm kiếm địa điểm
let btnSearch = document.querySelector('.fa-magnifying-glass')
btnSearch.addEventListener("click", function() {
    document.querySelector('.header-content').classList.toggle('active')
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


// SLIDER
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        items: 4,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
});