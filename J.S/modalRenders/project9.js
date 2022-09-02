import MainProject from "./projectMain";
import desktopImg from "../../images/project-9-imgs/countries-main-menu-desk.png";
import mobileImg from "../../images/project-9-imgs/countries-main-menu-mob.png";

class Project9 extends MainProject {
  _generateMarkup() {
    return `<div class="exit-icon-modal">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1L1 17M17 17L1 1L17 17Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="modal__content--img" >
        <picture>
        <source srcset="${mobileImg}" media="(min-width: 700px)">
        <source srcset="${desktopImg}">
        <img src="${desktopImg}" alt="Flowers">
        </picture>
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">Countries</h4>
        <p class="modal__content--descript">This application lets users search for different countries around the world and find out details about them. It also has a dark/light mode toggle for the users preference. This is a challenge solution from Frontend Mentor.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
          <li>React</li>
          <li>React-Router-6</li>
          <li>Redux-Toolkit</li>
          <li>Axios</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/David-Henery4/Where-in-the-world" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://where-abouts-in-the-world.netlify.app" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project9();
