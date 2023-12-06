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


//==================================================
//Slideshow met filter
//==================================================
//variable voor slideIndex die op 0 staat
let slideIndex = 0;
//run de function showSlides en geef slideIndex mee als argument
showSlides(slideIndex);

//maak 2 variablen voor de buttons van de carousel
var btnLeft = document.querySelector(".btn-arrow-left");
var btnRight = document.querySelector(".btn-arrow-right");

//linker button als je erop klikt telt hij plus 1 op en die geeft hij mee aan showSlides als argument
btnLeft.addEventListener("click", function() {
  showSlides(-1);
});

//rechter button als je erop klikt haalt hij min 1 er af en die geeft hij mee aan showSlides als argument
btnRight.addEventListener("click", function() {
  showSlides(+1);
});

function showSlides(n) {
  //maak de variable slides aan met als waarde een array van de children in carousel
  var slides = document.querySelector(".carousel").children;
  var inputSearch = document.querySelector("#search").value.toLowerCase();
  var cards = document.querySelectorAll(".img-card");
  var results = document.querySelector(".results");

  var resultCount = 0;

  //tell de variable n op bij slideIndex
  slideIndex += n;

  //check of slideIndex lager is dan 0, geef dan slideIndex de waarde van de lengte van slides -1
  if (slideIndex < 0) {
    slideIndex = slides.length -1;
  }
    
  //check of slideIndex hoger is dan de lengte van slides, geef dan slideIndex de waarde 0
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  //maak een for loop die net zo vaak blijft loopen als de item in slides, als i gelijk is aan slideIndex laat die afbeelding dan zien
  if (inputSearch !== "") {
    for (let i = 0; i < cards.length; i++) {
      let cardContent = cards[i].querySelector(".card-text").textContent.toLowerCase();

      if (cardContent.includes(inputSearch)) {
        if (i === slideIndex) {
          slides[i].classList.add("active-slide");
        } else {
          slides[i].classList.remove("active-slide");
        }
        resultCount++;
      } else {
        slides[i].classList.remove("active-slide");
      }
    }
    results.innerHTML = "Resultaten: " + resultCount;
  } else {
    for (var i = 0; i < slides.length; i++) {
      if (i === slideIndex) {
        slides[i].classList.add("active-slide");
      } else {
        slides[i].classList.remove("active-slide");
      }
    }
    results.innerHTML = "Resultaten: " + slides.length;
  }
}

//maak 2 variablen, 1 voor de container en 1 voor de tekst in de container
var imgCard = document.querySelector(".img-card");
var cardDescription = document.querySelector(".card-description");

//als je hovert over de container laat dan de tekst zien
imgCard.addEventListener("", function() {
  cardDescription.style.display = "block";
});

//als je niet hovert over de container haal dan de tekst weg
imgCard.addEventListener("", function() {
  cardDescription.style.display = "none";
});




