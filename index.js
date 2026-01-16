
gsap.registerPlugin(ScrollTrigger);

/*
=====================================================
================== NAVBAR LOGIC SECTION =============
===================================================== 
*/

//    navbar button logic

const barBtn = document.querySelector('#bar-btn');
const navBar = document.querySelector('.navbar-small-close');
const bgLogic = document.querySelector('.hidden-background');

barBtn.addEventListener('click', () => {
    navBar.classList.toggle('navbar-small-open');
    bgLogic.classList.toggle('hidden-background-open-nav');
})

// get started button logic

const getsBtns = document.querySelectorAll('.get-s-btn');

getsBtns.forEach((btn) => {

    btn.addEventListener('mouseenter', () => {
        btn.classList.add('get-s-btn-hover');
    });

    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('get-s-btn-hover');
    });

});


// get started button logic for small screen
const getsBtnSm = document.querySelector('.get-s-btn-sm');

getsBtnSm.addEventListener('mouseenter', () => {
    getsBtnSm.classList.toggle('get-s-btn-hover');
})
getsBtnSm.addEventListener('mouseleave', () => {
    getsBtnSm.classList.toggle('get-s-btn-hover')
})

// hidden background close navbar logic
bgLogic.addEventListener('click', () => {
    navBar.classList.remove('navbar-small-open');
    bgLogic.classList.remove('hidden-background-open-nav');
})

// navbar background when scrolling
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
    ".navbar,.navbar-small-close",
    {
        backgroundColor: "transparent"
    },
    {
        backgroundColor: "#FFFFFF",
        duration: 0.3,
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(
    ".nav-link,.navbar-brand,#toggle-nav-btn",
    { color: "#ffffff" },
    {
        color: "#000000",
        duration: 0.3,
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            toggleActions: "play none none reverse"
        }
    }
);


/*
   =====================================================
   ================== SERVICES SECTION =================
   =====================================================
   */
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const cardIcon = card.querySelector('.card-icon');

    card.addEventListener('mouseenter', () => {
        cardIcon.classList.add('card-icon-hover');
    });

    card.addEventListener('mouseleave', () => {
        cardIcon.classList.remove('card-icon-hover');
    });
});


/*
   =====================================================
   ================== SOLUTIONS SECTION ================
   =====================================================
   */

cards.forEach((card) => {
    const cardImg = card.querySelector('.card-img-top');

    card.addEventListener('mouseenter', () => {
        cardImg.classList.add('card-img-top-hover');
    })

    card.addEventListener('mouseleave', () => {
        cardImg.classList.remove('card-img-top-hover');
    })
})

/*
   =====================================================
   ================== FOOTER SECTION ================
   =====================================================
   */

//    date change

const dateEl = document.querySelector('#date');

const time = new Date;

const date = time.getFullYear();

dateEl.textContent = ` © ${date} Sovent-Tech. All
                    rights reserved.`;
