const SHOW_CARDS_COUNT = 30;

export default class NewsCardList {
  constructor(params) {
    this.cardListElement = params.cardListElement;
    this.newsCard = params.newsCard;
    this.newsApi = params.newsApi;
    this.searchInput = params.searchInput;
    this.preloader = params.preloader;
    this.searchResalEmpty = params.searchResalEmpty;
    this.searchingResultsElement = params.searchingResultsElement;
    this.dataStorage = params.dataStorage;
    this.showMoreBtn = params.showMoreBtn;
    this.showClassName = params.showClassName;
    this._setHandlers();
    this.startIndex = 0;
  }

  _setHandlers() {
    this.showMoreBtn.addEventListener('click', this.addCardNews.bind(this));
  }

  addCardNews() {
    const data = this.dataStorage.getData();
    const endCounterElements = data.length - this.startIndex;
    if (endCounterElements >= SHOW_CARDS_COUNT) {
      for (let index = this.startIndex; index < this.startIndex + SHOW_CARDS_COUNT; index++) {
        this.showMoreBtn.classList.add(this.showClassName);
        const element = data[index];
        const templateNewsCard = this.newsCard.getTemplate(element);
        this.cardListElement.insertAdjacentHTML('beforeend', templateNewsCard);
      }
    } else {
      for (let index = this.startIndex; index < this.startIndex + endCounterElements; index++) {
        const element = data[index];
        const templateNewsCard = this.newsCard.getTemplate(element);
        this.cardListElement.insertAdjacentHTML('beforeend', templateNewsCard);
        this.showMoreBtn.classList.remove(this.showClassName);
      }
    }
    this.startIndex += SHOW_CARDS_COUNT + 1;
  }

  getNewsFromServer() {
    this.clearData();
    this.preloader.openPreloader();
    this.newsApi.getNews(this.searchInput.getInputValue()).then(res => {
      this.preloader.closePreloader();
      if (res.totalResults !== 0) {
        this.dataStorage.setData(res.articles);
        this.addCardNews();
        this.searchingResultsElement.classList.add(this.showClassName);
      } else {
        this.searchResalEmpty.openSearchResalEmptyElement();
      }
    })
  }

  resetCardListElement() {
    this.searchingResultsElement.classList.remove(this.showClassName);
    while (this.cardListElement.firstChild) {
      this.cardListElement.removeChild(this.cardListElement.firstChild);
    }
  }

  clearData() {
    this.startIndex = 0;
    this.dataStorage.removeData();
    this.searchResalEmpty.closeSearchResalEmptyElement();
    this.resetCardListElement();
  }
}
