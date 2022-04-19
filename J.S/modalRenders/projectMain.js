
export default class MainProject {
  modalElement = document.querySelector(".modal__content");
  projectsContainer = document.querySelector(".projects__gallery");
  modal = document.querySelector(".modal");

  constructor() {
  this._modalExitListener()
  }

  _modalExitAction(e) {
    const clicked = e.target.closest(".exit-icon-modal");
    if (!clicked) return;
    this.modal.classList.remove("modal-active");
  }

  _modalExitListener() {
    this.modalElement.addEventListener(
      "click",
      this._modalExitAction.bind(this)
    );
  }

  // Shared handler
  projectHandler(handler) {
    this.projectsContainer.addEventListener("click", handler);
  }
  render() {
    const markUp = this._generateMarkup();
    this.modalElement.innerHTML = "";
    this.modalElement.insertAdjacentHTML("afterbegin", markUp);
  }
}
