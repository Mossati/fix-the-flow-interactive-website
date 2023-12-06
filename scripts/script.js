function navToggle() {
  let btnNav = document.getElementById("btn-nav-toggle");
  let navList = document.getElementById("nav-list");

  if (navList.style.display == "none") {
    btnNav.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    navList.style.display = "flex";
  }else {
    btnNav.innerHTML = '<i class="fa-solid fa-bars"></i>';
    navList.style.display = "none";
  }
}

var navBar = document.getElementById("nav-bar");

window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
      navBar.style.position = "sticky";
  } else {
      navBar.style.position = "absolute";
  }
});

var scrollToTopBtn = document.getElementById("scroll-top");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

var sections = document.querySelectorAll(".fade-in");

sections.forEach(function(section) {
  var isVisible = false;

document.addEventListener("scroll", function() {
    var sectionOffset = section.offsetTop;
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    if (scrollPosition > sectionOffset - windowHeight / 2 && !isVisible) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
        isVisible = true;
    }

    if (scrollPosition <= sectionOffset - windowHeight / 2 && isVisible) {
        section.style.opacity = 0;
        section.style.transform = "translateY(100%)";
        isVisible = false;
    }
});
});




