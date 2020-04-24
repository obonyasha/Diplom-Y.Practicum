export default class SearchInput {
  constructor(getNewsCallback, inputElement, buttonElement, errorElement) {
    this.inputElement = inputElement;
    this.buttonElement = buttonElement;
    this.getNewsCallback = getNewsCallback;
    this.errorElement = errorElement;
    this._setHandlers();
  }

  _setHandlers() {
    this.inputElement.addEventListener('input', this.checkFormInput.bind(this));
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

  checkFormInput() {
    let isValidForm = true;
    if (!this.checkInputValidity(this.inputElement)){
       isValidForm = false;
    }
    this.setSubmitButtonState(isValidForm);
    return isValidForm;
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
