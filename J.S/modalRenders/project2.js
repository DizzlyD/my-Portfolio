import MainProject from "./projectMain.js";
import kanbanMobile from "../../images/project-2-imgs/kanban-mobile.png"
import kanbanDesktop from "../../images/project-2-imgs/kanban-desktop.png"


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
        <source srcset="${kanbanMobile}" media="(min-width: 700px)">
        <source srcset="${kanbanDesktop}">
        <img src="${kanbanDesktop}" alt="Flowers">
        </picture>
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">Kanban Tasks</h4>
        <p class="modal__content--descript">Kanban Tasks is a task management app that allows users to control different tasks, update their status and create different task boards. Users can also change their tasks status by dragging them into different columns.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
          <li>React</li>
          <li>React-ReduxToolkit</li>
          <li>Git</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/David-Henery4/Kanban-Task-Manager" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://kanban-taskmanager.netlify.app" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project2();
