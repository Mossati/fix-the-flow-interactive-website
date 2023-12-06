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

let slideIndex = 0;
showSlides(slideIndex);

var btnLeft = document.querySelector(".btn-arrow-left");
var btnRight = document.querySelector(".btn-arrow-right");

btnLeft.addEventListener("click", function() {
  showSlides(slideIndex - 1);
});

btnRight.addEventListener("click", function() {
  showSlides(slideIndex + 1);
});

function showSlides(n) {
  var slides = document.querySelector(".carousel").children;

  if (n < 0) {
    slideIndex = 0;
  }
  
  if (n > slides.length) {
    slideIndex = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    if (i === n) {
      slides[i].style.display = "block";
    }else {
      slides[i].style.display = "none";
    }
  }
}




