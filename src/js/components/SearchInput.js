export default class SearchInput {
  constructor(params) {
    this.inputElement = params.inputElement;
    this.buttonElement = params.buttonElement;
    this.errorElement = params.errorElement;
    this.dataStorage = params.dataStorage;
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

  getInputValue() {
    return this.inputElement.value;
  }

  setInputValue() {
    this.inputValue = this.dataStorage.getInputValue();
    this.inputElement.value = this.inputValue;
  }

  disablElementsForm () {
    this.buttonElement.setAttribute('disabled', true);
    this.inputElement.setAttribute('disabled', true);
  }
  enableElementsForm () {
    this.buttonElement.removeAttribute('disabled');
    this.inputElement.removeAttribute('disabled');
  }
}
