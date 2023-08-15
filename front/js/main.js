//Modal

const modal = document.getElementById('my-modal')
const btn = document.getElementById('my-btn')
const span = document.getElementsByClassName('close')[0]
const formBtn = document.querySelector('.form-btn')


btn.onclick = function () {
    modal.style.display = 'block'
}
formBtn.onclick = function () {
    modal.style.display = 'none'
    alert('Va multumim pentru rezervare , in scurt timp cu DVS va face legatura managerul pentru a va oferi mai multe detalii')
}

span.onclick = function () {
    modal.style.display = 'none'
}

window.onclick = function (e) {
    if(e.target == modal){
        modal.style.display = 'none'
    }
}

//Carousel
let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n){
    let i ;
    let slides = document.getElementsByClassName("mySlides")
    let  dot = document.getElementsByClassName("dot")
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    for ( i = 0; i< dot.length; i++){
        dot[i].className = dot[i].className.replace('active','')
    }
    slides[slideIndex-1].style.display = 'block';
}


//scroll up
const scroll =document.getElementById('myScroll')
let isCh = false
console.log(scroll)
window.addEventListener("scroll", (event) => {
   if(!isCh && this.scrollY > 1000){
       isCh = true
       scroll.style.display = 'block'
   }else if(isCh && this.scrollY < 900){
       isCh = false
       scroll.style.display = 'none'
   }

});

// Modal for direction
function newFunction() {
    let modal = document.getElementById('newDiv')
    if(modal.style.display === 'none' ){
        modal.style.display = 'block'
    } else {
        modal.style.display = 'none'
    }
}

//Menu
const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
    if( nav.classList.toggle('open')){
        navBtnImg.src="./img/nav_close.svg"
    } else {
        navBtnImg.src="./img/nav_open.svg"
    }
}