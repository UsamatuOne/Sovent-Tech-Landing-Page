

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