

/*
   =====================================================
   ================== NAVBAR LOGIC SECTION =============
   ===================================================== 
   */

//    navbar button logic

const barBtn = document.querySelector('#bar-btn');
const navBar = document.querySelector('.navbar-small-close');

barBtn.addEventListener('click', () => {
    navBar.classList.toggle("navbar-small-open")
})

// get started button logic

const getsBtn = document.querySelector('.get-s-btn');

getsBtn.addEventListener('mouseover', () => {
    getsBtn.classList.toggle('get-s-btn-hover')
})
getsBtn.addEventListener('mouseout', () => {
    getsBtn.classList.toggle('get-s-btn-hover')
})

// get started button logic for small screen

const getsBtnSm = document.querySelector('.get-s-btn-sm');

getsBtnSm.addEventListener('mouseover', () => {
    getsBtnSm.classList.toggle('get-s-btn-hover')
})
getsBtnSm.addEventListener('mouseout', () => {
    getsBtnSm.classList.toggle('get-s-btn-hover')
})


/*
   =====================================================
   ================== HERO SECTION =====================
   ===================================================== 
   */

// background omage size small screen logic
const heroBg = document.querySelector('.hero-bg');

if (window.innerWidth <= 992 + "px") {
    heroBg.style.backgroundImage.src = url('images/hero-img.png2');
}

// button 1 logic

const heroBtn1 = document.querySelector('.hero-title-btn1');

heroBtn1.addEventListener('mouseover', () => {
    heroBtn1.classList.toggle('hero-title-btn1-hover');
})
heroBtn1.addEventListener('mouseout', () => {
    heroBtn1.classList.toggle('hero-title-btn1-hover');
})

// button 2 logic

const heroBtn2 = document.querySelector('.hero-title-btn2');

heroBtn2.addEventListener('mouseover', () => {
    heroBtn1.classList.toggle('hero-title-btn2-hover');
    heroBtn2.style.backgroundColor = "#ffff";
    heroBtn2.style.color = "#000";
})
heroBtn2.addEventListener('mouseout', () => {
    heroBtn2.classList.toggle('hero-title-btn2-hover');
    heroBtn2.style.backgroundColor = "transparent";
    heroBtn2.style.color = "#ffff";
})