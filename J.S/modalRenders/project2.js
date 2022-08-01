import MainProject from "./projectMain.js";
import scheduleTrackRDesk from "../../images/project-2-imgs/schedule-trackr-desk.png";
import scheduleTrackRMob from "../../images/project-2-imgs/schedule-trackr-mob.png";


// MARS WEATHER PROJECT

class Project2 extends MainProject {
  _generateMarkup() {
      return `
      <div class="exit-icon-modal">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1L1 17M17 17L1 1L17 17Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="modal__content--img" >
        <picture>
        <source srcset="${scheduleTrackRMob}" media="(min-width: 700px)">
        <source srcset="${scheduleTrackRDesk}">
        <img src="${scheduleTrackRDesk}" alt="Flowers">
        </picture>
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">Schedule TrackR</h4>
        <p class="modal__content--descript">Helps users keep on top of their day and helps them remain organised to get what they need done. It also has a couple of features like a todos section and goals section to help users remain motivated to reach thier goals.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Git</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/David-Henery4/Schedule-TrackR" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://schedule-trackr.netlify.app" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project2();
