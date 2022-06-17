import MainProject from "./projectMain.js";
import languageSiteImg from "../../images/Language-placeholder-coming-soon.jpg";
import languisaMobile from "../../images/Languisa-modal-mob.png"
import languisaDesk from "../../images/Languisa-modal-desk.png"

class Project6 extends MainProject {
  _generateMarkup() {
      return `
      <div class="exit-icon-modal">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1L1 17M17 17L1 1L17 17Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="modal__content--img" >
        <source srcset="${languisaDesk}" media="(min-width: 700px)">
        <source srcset="${languisaMobile}">
        <img src="${languisaMobile}" alt="Flowers">
        </picture>
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">Languisa</h4>
        <p class="modal__content--descript">Fictional language learning site. Currently in progress. Coming Soon.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="modal__content--links">
          <a href="#projects" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="#projects" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project6();
