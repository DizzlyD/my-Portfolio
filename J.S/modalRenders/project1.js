import MainProject from "./projectMain.js";
import myTeamImg from "../../images/main--myteam-football-dashboard.png";

class Project1 extends MainProject {
  
  _generateMarkup() {
    return `
      <div class="exit-icon-modal">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1L1 17M17 17L1 1L17 17Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="modal__content--img" >
        <img src="${myTeamImg}" alt="">
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">myTeam</h4>
        <p class="modal__content--descript">myTeam allows users to search for any football team they like and see statistics about that team. Like games won, fixtures,results, minutes most likely to score and more. It also has a dark/light mode feature.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
          <li>Parcel</li>
          <li>Git</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/DizzlyD/myTeam-Football-Dashboard" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://myteam-football-dashboard.netlify.app" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project1();
