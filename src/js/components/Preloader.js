export default class Preloader{
  constructor (preloaderElement, showClassName) {
    this.preloaderElement = preloaderElement;
    this.showClassName = showClassName;
  }

  openPreloader() {
    this.preloaderElement.classList.add(this.showClassName);
  }

  closePreloader() {
    this.preloaderElement.classList.remove(this.showClassName);
  }
}
