document.querySelector(".menu__hamburguesa").addEventListener("click", animarMenu);

var linea1 = document.querySelector(".linea1__menu");
var linea2 = document.querySelector(".linea2__menu");
var linea3 = document.querySelector(".linea3__menu");
var menuMobile= document.querySelector(".nav__links--mobile");

function animarMenu( ) {
    linea1.classList.toggle("activeLinea1__menu");
    linea2.classList.toggle("activeLinea2__menu");
    linea3.classList.toggle("activeLinea3__menu");

    menuMobile.classList.toggle("nav__links--mobile--active");
}

// endHamburguer

// slider
const slider =  document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);
/*jala*/
function Next( ){
    let sliderSectionFirst = document.querySelectorAll(".slider__section") [0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function( ){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500); 
}

function Prev( ){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function( ){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500); 
}

btnRight.addEventListener('click', function( ){
    Next( );
});

btnLeft.addEventListener('click', function( ){
    Prev( );
});

setInterval(function( ){
    Next( );
}, 5000);
// endSlider