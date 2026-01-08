

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
    bgLogic.classList.toggle("hidden-background-open-nav");
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

// hidden background close navbar logic
const bgLogic = document.querySelector('.hidden-background');
// const bgLogicOpenNav = document.querySelector('.hidden-background-open-nav');

bgLogic.addEventListener('click', () => {
    if (navBar.classList.toggle("navbar-small-open")) {
        !navBar.classList.toggle("navbar-small-open")
    }
    if (bgLogic.classList.toggle("hidden-background-open-nav")) {
        !bgLogic.classList.toggle("hidden-background-open-nav")
    }
})

/*
   =====================================================
   ================== HERO SECTION =====================
   ===================================================== 
   */



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