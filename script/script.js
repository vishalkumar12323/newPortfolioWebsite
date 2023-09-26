const heroSection = document.querySelector(".hero-section");
const imgSection = document.querySelector(".images-section");
const header = document.querySelector(".header");

// Create Sticky Navbar ========>
const stickyNavbar = () => {
  const newObserver = new IntersectionObserver(
    (ent) => {
      const entries = ent[0];
      // console.log(entries);

      if (!entries.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }

      if (!entries.isIntersecting) {
        document.body.classList.remove("scrollBtnHide");
      } else {
        document.body.classList.add("scrollBtnHide");
      }
    },
    { root: null, threshold: 0 }
  );
  newObserver.observe(heroSection);
};
stickyNavbar();

// Toggling Responsive Navbar =========>
const toggleNavbar = () => {
  const mobileBar = document.querySelector(".mobile-bar-icon");

  const mobileNavbar = () => {
    header.classList.toggle("active");
  };
  mobileBar.addEventListener("click", mobileNavbar);
};
toggleNavbar();

// Click ScrollToTop Functionality =======>
const clickToScrollTop = () => {
  const scrollBtn = document.querySelector(".scrollBtn");
  scrollBtn.addEventListener("click", () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
  });
};
clickToScrollTop();

const onMouseAnimation = () => {
  const images_section = document.querySelector("#images-section");
  images_section.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor_anim", {
      left: dets.x,
      top: dets.y,
    });
  });
};
onMouseAnimation();
const offMouseAnimation = () => {
  const images_section = document.querySelector("#images-section");
  images_section.addEventListener("mouseleave", () => {});
};
offMouseAnimation();
