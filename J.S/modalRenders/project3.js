import MainProject from "./projectMain.js";
import myWeatherImg from "../../images/extremo-weather-finder.png";
import testImg from "../../images/extremo-weather-finder.netlify-test.png"

// MYWEATHER APP

class Project3 extends MainProject {
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
        <source srcset="${myWeatherImg}">
        <img src="${myWeatherImg}" alt="Flowers">
        </picture>
      </div>
      <div class="modal__content--details">
        <h4 class="modal__content--title">myWeather</h4>
        <p class="modal__content--descript">myWeather allows users to get weather forecasts based on their current location or by searching for a location. It also lets users search for next weeks forecast and forecast for the next five hours. Also includes a top 10 cities current weather feature.</p>
        <ul class="modal__content--list margin1Zero">
          <h6>Technologies used:</h6>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>Javascript</li>
          <li>Parcel</li>
          <li>Git</li>
        </ul>
        <div class="modal__content--links">
          <a href="https://github.com/David-Henery4/myWeatherApp" class="modal-btn" target="_blank" rel="noopener noreferrer">gitHub</a>
          <a href="https://extremo-weather-finder.netlify.app" class="modal-btn" target="_blank" rel="noopener noreferrer">Live Project</a>
        </div>
      </div>`;
  }
}

export default new Project3();
