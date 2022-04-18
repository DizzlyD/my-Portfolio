console.log("working");


// BASIC FUNCTIONALITY (SPLIT TO DIFFERENT MODULES)

const burger = document.querySelector(".burger-menu");
const slideNav = document.querySelector(".nav-slide");
const exitSlideIcon = document.querySelector(".exit-icon");
const lgeWidth = window.matchMedia("(min-width: 1025px)");


const toggleSlideNavClass = function(){
  slideNav.classList.toggle("nav-slide-active");
}

const burgerFunctionality= function(){
  burger.addEventListener("click", function (e) {
    toggleSlideNavClass()
  });
}

const ExitSlideFunctionality = function(){
  exitSlideIcon.addEventListener("click", function () {
    toggleSlideNavClass();
  });
}

const exitOnLinkClick = function(){
  slideNav.addEventListener("click", function(e){
    const clicked = e.target.closest(".nav-slide-links")
    if (!clicked) return
    toggleSlideNavClass();
  })
};

const closeOnDesktop = function(){
  const navAutoClose = function(e){
    if (e.matches){
      slideNav.classList.remove("nav-slide-active");
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




//***********************************************//

