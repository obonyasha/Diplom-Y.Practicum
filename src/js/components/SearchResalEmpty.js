export default class SearchResalEmpty{
  constructor (searchResalEmptyElement, showClassName) {
    this.searchResalEmptyElement = searchResalEmptyElement;
    this.showClassName = showClassName;
  }

   openSearchResalEmptyElement() {
    this.searchResalEmptyElement.classList.add(this.showClassName);
  }

  closeSearchResalEmptyElement() {
    this.searchResalEmptyElement.classList.remove(this.showClassName);
  }
}
