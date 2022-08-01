import MainProject from "./projectMain.js";
import languisaDesk from "../../images/project-6-imgs/Languisa-desktop-image.png";
import languisaDeskSmall from "../../images/project-6-imgs/Languisa-mobile-image.png";

class Project6 extends MainProject {
  _generateMarkup() {
      return `
      <div class="exit-icon-modal">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1L1 17M17 17L1 1L17 17Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="modal__content--img" >
        <picture>
        <source srcset="${languisaDeskSmall}" media="(min-width: 700px)">
        <source srcset="${languisaDesk}">
        <img src="${languisaDesk}" alt="Flowers">
        </picture>
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">Languisa</h4>
        <p class="modal__content--descript">Languisa is a fictional language learning site. Which offers users multiple ways of learning a new language. The site also has a small greetings animation, which displays greetings in different languages.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
          <li>Git</li>
          <li>Parcel</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/David-Henery4/Languisa" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://languisa.netlify.app" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project6();
