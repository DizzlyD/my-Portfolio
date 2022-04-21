import MainProject from "./projectMain.js";
// import dropzoneImg from "../../images/cod-dropzone-generator-placeholder.jpg";
import dropZoneImg from "../../images/dropzone-generator.png"

// DROPZONE PROJECT

class Project4 extends MainProject {
    _generateMarkup(){
        return `
      <div class="exit-icon-modal">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1L1 17M17 17L1 1L17 17Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="modal__content--img" >
        <img src="${dropZoneImg}" alt="">
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">DropZone</h4>
        <p class="modal__content--descript">DropZone is a random location generator for warzone players to help them choose where to drop with their friends. It has a couple of features like selecting & removing different locations and also a no repeat location feature.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/DizzlyD/DropZone" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://dropzone-generator.netlify.app/" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
    }
}

export default new Project4();
