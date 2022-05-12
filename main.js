window.addEventListener("scroll", onScroll);

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  transformBackToTopButtonInWhiteOnFooter();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function transformBackToTopButtonInWhiteOnFooter() {
  console.log(scrollY);
  if (scrollY > 3300 && innerWidth >= 1424) {
    backToTopButton.classList.add("white-button");
  } else if (scrollY > 3250 && innerWidth < 1424 && innerWidth >= 1024) {
    backToTopButton.classList.add("white-button");
  } else if (scrollY > 4755 && innerWidth <= 1023 && innerWidth >= 815) {
    backToTopButton.classList.add("white-button");
  } else if (scrollY > 4810 && innerWidth <= 814 && innerWidth >= 660) {
    backToTopButton.classList.add("white-button");
  } else if (scrollY > 4850 && innerWidth <= 659 && innerWidth >= 527) {
    backToTopButton.classList.add("white-button");
  } else if (scrollY > 4890 && innerWidth <= 526 && innerWidth >= 453) {
    backToTopButton.classList.add("white-button");
  } else if (scrollY > 4928 && innerWidth <= 452 && innerWidth >= 410) {
    backToTopButton.classList.add("white-button");
  } else if (scrollY > 5970 && innerWidth <= 409 && innerWidth >= 376) {
    backToTopButton.classList.add("white-button");
  } else if (scrollY > 5125 && innerWidth <= 375 && innerWidth >= 321) {
    backToTopButton.classList.add("white-button");
  } else if (scrollY > 5485 && innerWidth <= 320) {
    backToTopButton.classList.add("white-button");
  } else {
    backToTopButton.classList.remove("white-button");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(
  `#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content`
);

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  speed: 800,
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    1100: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});
