import * as nav from "./navAnimations";

console.log("working");


const projectsContainer = document.querySelector(".projects__gallery");
const modal = document.querySelector(".modal")
const exitIconModal = document.querySelector(".exit-icon-modal");

// MIGHT HAVE TO EVENT DELEGATION
exitIconModal.addEventListener("click" , function(){
  modal.classList.remove("modal-active");
})

projectsContainer.addEventListener("click", function(e){
  const clicked = e.target.closest(".project-link")
  if (!clicked) return
  modal.classList.add("modal-active")
})

//***********************************************//

