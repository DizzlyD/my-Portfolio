import MainProject from "./projectMain.js";
import desktopImg from "../../images/project-7-imgs/Screenshot-desk-active.png"
import mobileImg from "../../images/project-7-imgs/Screenshot-mob.png"

class Project7 extends MainProject {
    _generateMarkup(){
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
        <h4 class="modal__content--title">Sneakers</h4>
        <p class="modal__content--descript">This is a frontend mentor challenge solution. It's a single product page for a fictional company. It has a fully functional cart feature. Users can add & remove the item to the cart, while also calculating its overall price. It has a gallery & modal gallery to display images of the product.</p>
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
          <a href="https://github.com/David-Henery4/E-commerce-product-page" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://main--sneakerz-product-page.netlify.app" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
    }
}

export default new Project7()