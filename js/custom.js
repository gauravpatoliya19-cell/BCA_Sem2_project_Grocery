let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

let shoppingCart = document.querySelector('.shopping-cart');
let cartBtn = document.querySelector('#cart-btn');

let loginForm = document.querySelector('.login-from');
let loginBtn = document.querySelector('#login-btn');

let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

if (searchBtn && searchForm) {
    searchBtn.onclick = () => {
        searchForm.classList.toggle('active');
        if (shoppingCart) shoppingCart.classList.remove('active');
        if (loginForm) loginForm.classList.remove('active');
        if (navbar) navbar.classList.remove('active');
    };
}

if (cartBtn && shoppingCart) {
    cartBtn.onclick = () => {
        shoppingCart.classList.toggle('active');
        if (searchForm) searchForm.classList.remove('active');
        if (loginForm) loginForm.classList.remove('active');
        if (navbar) navbar.classList.remove('active');
    };
}

if (loginBtn && loginForm) {
    loginBtn.onclick = () => {
        loginForm.classList.toggle('active');
        if (searchForm) searchForm.classList.remove('active');
        if (shoppingCart) shoppingCart.classList.remove('active');
        if (navbar) navbar.classList.remove('active');
    };
}

if (menuBtn && navbar) {
    menuBtn.onclick = () => {
        navbar.classList.toggle('active');
        if (searchForm) searchForm.classList.remove('active');
        if (shoppingCart) shoppingCart.classList.remove('active');
        if (loginForm) loginForm.classList.remove('active');
    };
}

window.onscroll = () => {
    if (searchForm) searchForm.classList.remove('active');
    if (shoppingCart) shoppingCart.classList.remove('active');
    if (loginForm) loginForm.classList.remove('active');
    if (navbar) navbar.classList.remove('active');
};

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
