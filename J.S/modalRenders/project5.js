import MainProject from "./projectMain.js";
import sonicboomImg from "../../images/sonicboom-festival.png"
import testImg from "../../images/sonicboom-festival.netlify-test.png";

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
        <picture>
        <source srcset="${testImg}" media="(min-width: 700px)">
        <source srcset="${sonicboomImg}">
        <img src="${sonicboomImg}" alt="Flowers">
        </picture>
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">SonicBoom</h4>
        <p class="modal__content--descript">SonicBoom is a fictional music festival web site. It's Primarily focused on electronic music and based in croatia.
        It has a lot of general concepts used in most festival sites like a vibrant colour theme and photo gallerys to try and showcase the festival experience.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
          <li>Parcel</li>
          <li>Git</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/David-Henery4/Sonicboom-Festival-Site" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://sonicboom-festival.netlify.app/" class="modal-btn" target="_blank" rel="noopener noreferrer" >Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project5();
