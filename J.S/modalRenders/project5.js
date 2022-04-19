import MainProject from "./projectMain.js";
import sonicboomModalImg from "../../images/festival-placeholder.jpg";

// SONIC BOOM PROJECT

class Project5 extends MainProject {
  _generateMarkup() {
    return `
      <div class="exit-icon-modal">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1L1 17M17 17L1 1L17 17Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="modal__content--img" >
        <img src="${sonicboomModalImg}" alt="">
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">SonicBoom</h4>
        <p class="modal__content--descript">SonicBoom is a fictional music festival multi page web site. The festival is based in croatia and is primarily focused on electronic music.</p>
        <ul class="modal__content--list">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
        </ul>
        <div class="modal__content--links">
          <a href="#" class="modal-btn">gitHub</a>
          <a href="#" class="modal-btn">Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project5();
