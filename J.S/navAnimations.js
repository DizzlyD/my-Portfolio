
// Navigation Animation (burger,nav functionality)

const burger = document.querySelector(".burger-menu");
const burgerLine1 = document.querySelector(".line-1")
const burgerLine2 = document.querySelector(".line-2")
const burgerLine3 = document.querySelector(".line-3");
const slideNav = document.querySelector(".nav-slide");
const exitSlideIcon = document.querySelector(".exit-icon");
const lgeWidth = window.matchMedia("(min-width: 1025px)");

/**
 * Adds/removes classes to display burger animation.
 */
const burgerAnimation = function () {
    burgerLine1.classList.toggle("burger-line-1");
    burgerLine2.classList.toggle("burger-line-2");
    burgerLine3.classList.toggle("burger-line-3");
};

/**
 * Toggles the class to add/remove the slide in navigation
 */
const toggleSlideNavClass = function(){
  slideNav.classList.toggle("nav-slide-active");
}

/**
 * Toggles burger animation and slide in navigation on the burger icon click event.
 */
const burgerFunctionality= function(){
  burger.addEventListener("click", function (e) {
    toggleSlideNavClass()
    burgerAnimation()
  });
}

/**
 * Closes side nav and reverses burger animation when exit icon was clicked.
 */
const ExitSlideFunctionality = function(){
  exitSlideIcon.addEventListener("click", function () {
    toggleSlideNavClass();
    burgerAnimation()
  });
}

/**
 * Closes side nav and reverses burger animation when one of the slide in links are clicked
 */
const exitOnLinkClick = function(){
  slideNav.addEventListener("click", function(e){
    const clicked = e.target.closest(".nav-slide-links")
    if (!clicked) return
    toggleSlideNavClass();
    burgerAnimation()
  })
};

/**
 * Closes side nav and reverses burger animation automaticly when the screen size goes from tablet & mobile to desktop. 
 */
const closeOnDesktop = function(){
  const navAutoClose = function(e){
    if (e.matches){
      slideNav.classList.remove("nav-slide-active");
      burgerAnimation()
    }
  }
  lgeWidth.addEventListener("change", navAutoClose)
}

/**
 * Holds all function calls related to the navigation animation.
 */
const slideNavFunctionalityInit = function(){
  burgerFunctionality()
  ExitSlideFunctionality()
  exitOnLinkClick()
  closeOnDesktop()
}

slideNavFunctionalityInit()