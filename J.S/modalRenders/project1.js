import MainProject from "./projectMain.js";
import desktopImg from "../../images/project-1-imgs/desktop-audiophile.png";
import mobileImg from "../../images/project-1-imgs/mobile-audiophile.png";


class Project1 extends MainProject {
  
  _generateMarkup() {
    return `
      <div class="exit-icon-modal">
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
        <h4 class="modal__content--title">Audiophile</h4>
        <p class="modal__content--descript">Audiophile is a music equipment ecommerce site. Users can browse different products and categries.
        It also has cart full cart functionality and checkout validation for when users want to make a purchase. (Frontend Mentor Project)</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript/React.js</li>
          <li>React-Router</li>
          <li>Redux-Toolkit</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/David-Henery4/Audiophile-Ecommerce-site" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://audiophile-ecommerce-store.netlify.app" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project1();
