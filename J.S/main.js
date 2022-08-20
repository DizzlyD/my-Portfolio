import "core-js/stable";
import "regenerator-runtime/runtime";

// MODAL FUNCTIONALITY

import * as nav from "./navAnimations";
import Project1 from "./modalRenders/project1.js";
import Project2 from "./modalRenders/project2.js";
import Project3 from "./modalRenders/project3.js";
import Project4 from "./modalRenders/project4.js";
import Project5 from "./modalRenders/project5.js";
import Project6 from "./modalRenders/project6.js";
import Project7 from "./modalRenders/project7.js";
import Project8 from "./modalRenders/project8.js";

const modal = document.querySelector(".modal")


/**
 * Removes Modal on overlay click
 */
modal.addEventListener("click", function(e){
  const clicked = e.target.classList.contains("modal")
  if (!clicked) return
  modal.classList.remove("modal-active")
})

/**
 * Displays modal and retrieves dataset from the clicked link and inputs it into the 'projectSection' to distribute to the projects functions.
 * @param {Event} e 
 * @returns Guard Clause
 */
const activateModal = function(e){
  const clicked = e.target.closest(".project-link");
  if (!clicked) return;
  modal.classList.add("modal-active");
  const projectNumber = clicked.dataset.pro;
  projectSelection(projectNumber)
};

/**
 * Distributes dataset Number
 * @param {number} n Dataset number
 */
const projectSelection = function(n){
displayProject1(n)
displayProject2(n)
displayProject3(n)
displayProject4(n)
displayProject5(n)
displayProject6(n)
displayProject7(n)
displayProject8(n)
}

/**
 * Checks to see if dataset matches the right project, then renders that project to the modal.
 * @param {number} projectNum dataset number
 */
const displayProject1 = (projectNum) => {
  if (+projectNum === 1) Project1.render()
}
const displayProject2 = (projectNum) => {
  if (+projectNum === 2) Project2.render()
}
const displayProject3 = (projectNum) => {
  if (+projectNum === 3) Project3.render()
};
const displayProject4 = (projectNum) => {
  if (+projectNum === 4) Project4.render()
};
const displayProject5 = (projectNum) => {
  if (+projectNum === 5) Project5.render()
};
const displayProject6 = (projectNum) => {
  if (+projectNum === 6) Project6.render()
};
const displayProject7 = (projectNum) => {
  if (+projectNum === 7) Project7.render()
};
const displayProject8 = (projectNum) => {
  if (+projectNum === 8) Project8.render()
};

/**
 * Listens for the click event from one of the projects object
 */
const init = function(){
  Project1.projectHandler(activateModal)
};
init()

//***********************************************//

