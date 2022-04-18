console.log("nav.JS working")

// Navigation Animation (burger,nav functionality)

const burger = document.querySelector(".burger-menu");
const burgerLine1 = document.querySelector(".line-1")
const burgerLine2 = document.querySelector(".line-2")
const burgerLine3 = document.querySelector(".line-3");
const slideNav = document.querySelector(".nav-slide");
const exitSlideIcon = document.querySelector(".exit-icon");
const lgeWidth = window.matchMedia("(min-width: 1025px)");

const burgerAnimation = function () {
    burgerLine1.classList.toggle("burger-line-1");
    burgerLine2.classList.toggle("burger-line-2");
    burgerLine3.classList.toggle("burger-line-3");
};


const toggleSlideNavClass = function(){
  slideNav.classList.toggle("nav-slide-active");
}

const burgerFunctionality= function(){
  burger.addEventListener("click", function (e) {
    toggleSlideNavClass()
    burgerAnimation()
  });
}

const ExitSlideFunctionality = function(){
  exitSlideIcon.addEventListener("click", function () {
    toggleSlideNavClass();
    burgerAnimation()
  });
}

const exitOnLinkClick = function(){
  slideNav.addEventListener("click", function(e){
    const clicked = e.target.closest(".nav-slide-links")
    if (!clicked) return
    toggleSlideNavClass();
    burgerAnimation()
  })
};

const closeOnDesktop = function(){
  const navAutoClose = function(e){
    if (e.matches){
      slideNav.classList.remove("nav-slide-active");
      burgerAnimation()
    }
  }
  lgeWidth.addEventListener("change", navAutoClose)
}

const slideNavFunctionalityInit = function(){
  burgerFunctionality()
  ExitSlideFunctionality()
  exitOnLinkClick()
  closeOnDesktop()
}

slideNavFunctionalityInit()