import MainProject from "./projectMain.js";
import dropzoneImg from "../../images/cod-dropzone-generator-placeholder.jpg";

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
        <img src="${dropzoneImg}" alt="">
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">DropZone</h4>
        <p class="modal__content--descript">DropZone is a random location generator for the call of duty game mode warzone, it also has a couple of features like letting players select or remove their choosen locations.</p>
        <ul class="modal__content--list">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
          <li>Parcel</li>
          <li>Git</li>
        </ul>
        <div class="modal__content--links">
          <a href="#" class="modal-btn">gitHub</a>
          <a href="#" class="modal-btn">Live Project</a>
        </div>
      </div>`;
    }
}

export default new Project4();
