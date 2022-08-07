import MainProject from "./projectMain.js";
import ipTrackerDesktop from "../../images/project-5-imgs/ip-tracker-desktop.png";
import ipTrackerMobile from "../../images/project-5-imgs/ip-tracker-mobile.png";

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
        <source srcset="${ipTrackerMobile}" media="(min-width: 700px)">
        <source srcset="${ipTrackerDesktop}">
        <img src="${ipTrackerDesktop}" alt="Flowers">
        </picture>
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">Ip Address Tracker</h4>
        <p class="modal__content--descript">Ip address tracker is a frontend coding challenge from frontend mentor. Users can search for details about a specific Ip address, while also showing details about the users Ip address.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux-Toolkit</li>
          <li>Git</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/David-Henery4/IP-Address-Tracker" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://main--ip-address-tracker-mentor.netlify.app" class="modal-btn" target="_blank" rel="noopener noreferrer" >Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project5();
