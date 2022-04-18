console.log("working");


// BASIC FUNCTIONALITY (SPLIT TO DIFFERENT MODULES)

const burger = document.querySelector(".burger-menu");
const slideNav = document.querySelector(".nav-slide");
const exitSlideIcon = document.querySelector(".exit-icon");


const slideNavFunctionality = function(){
  burger.addEventListener("click", function (e) {
    slideNav.classList.add("nav-slide-active");
  });
  exitSlideIcon.addEventListener("click", function(){
    slideNav.classList.remove("nav-slide-active")
  });
};
slideNavFunctionality()



//***********************************************//

