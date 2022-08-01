import MainProject from "./projectMain.js";
import marsWeathImg from "../../images/project-4-imgs/mars-tiempo-app.png";
import testImg from "../../images/project-4-imgs/mars-tiempo.netlify-test.png";

// DROPZONE PROJECT

class Project4 extends MainProject {
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
        <source srcset="${marsWeathImg}">
        <img src="${marsWeathImg}" alt="Flowers">
        </picture>
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">Mars Weather</h4>
        <p class="modal__content--descript">Provides the users with weather data from mars, from nasa's curiosity rover. It allows them to see the weather for the most current day aswell as the previous week. Also contains a fahrenheit to celsius converter.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
          <li>Parcel</li>
          <li>Git</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/David-Henery4/Mars-Weather" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://mars-tiempo.netlify.app" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project4();
