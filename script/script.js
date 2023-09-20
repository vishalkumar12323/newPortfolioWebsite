const heroSection = document.querySelector('.hero-section');
const imgSection = document.querySelector('.images-section');
const header = document.querySelector('.header');

// Create Sticky Navbar =========================================>Start
const newObserver = new IntersectionObserver((ent) => {
    const entries = ent[0];
    // console.log(entries);

    if (!entries.isIntersecting) {
        document.body.classList.add('sticky');
    }
    else {
        document.body.classList.remove('sticky');
    }


    if (!entries.isIntersecting) {
        document.body.classList.remove('scrollBtnHide');
    }
    else {
        document.body.classList.add('scrollBtnHide');
    }
}, { root: null, threshold: 0 });
newObserver.observe(heroSection);
// Create Sticky Navbar =========================================>End.



// Toggling Responsive Navbar =========================================>Start
const mobileBar = document.querySelector('.mobile-bar-icon');

const mobileNavbar = () => {
    header.classList.toggle('active');
}
mobileBar.addEventListener('click', mobileNavbar);
// Toggling Responsive Navbar =========================================>End.


// Click ScrollToTop Functionality =========================================>Start
const scrollBtn = document.querySelector('.scrollBtn');

scrollBtn.addEventListener('click', () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
});
// Click ScrollToTop Functionality =========================================>End.
