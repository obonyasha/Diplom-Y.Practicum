export default class SearchInput {
  constructor(getNewsCallback, inputElement, buttonElement, errorElement) {
    this.inputElement = inputElement;
    this.buttonElement = buttonElement;
    this.getNewsCallback = getNewsCallback;
    this.errorElement = errorElement;
    this._setHandlers();
    this.checkInputValidity();
  }

  _setHandlers() {
    this.inputElement.oninput = () => {
      const isValidForm = this.checkInputValidity();
      this.setSubmitButtonState(isValidForm);
    };
  }

  checkInputValidity() {
    if (this.inputElement.validity.valueMissing) {
      this.errorElement.textContent = "Нужно ввести ключевое слово";
      this.activateError();
      return false;
    }

    this.resetError();

    return true;
  }

  activateError() {
    this.errorElement.parentNode.classList.add('input-container__invalid');
  }

  resetError() {
    this.errorElement.parentNode.classList.remove('input-container__invalid');
    this.errorElement.textContent = '';
  }

  setSubmitButtonState(isValidForm) {
    if (isValidForm) {
      this.buttonElement.removeAttribute('disabled');
    } else (
      this.buttonElement.setAttribute('disabled', true)
    );
  }
}
