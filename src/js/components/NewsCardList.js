const SHOW_CARDS_COUNT = 3;

export default class NewsCardList {
  constructor(params) {
    this.cardListElement = params.cardListElement;
    this.newsCard = params.newsCard;
    this.newsApi = params.newsApi;
    this.inputSearchElement = params.inputSearchElement;
    this.showClassName = params.showClassName;
    this.searchResalEmptyElement = params.searchResalEmptyElement;
    this.searchingResultsElement = params.searchingResultsElement;
    this.preloaderElement = params.preloaderElement;
    this.dataStorage = params.dataStorage;
    this.showMoreBtn = params.showMoreBtn;
    this._setHandlers();
    this.startIndex = 0;
  }

  _setHandlers() {
    this.showMoreBtn.addEventListener('click', this.addCardNews.bind(this));
  }

  addCardNews() {
    const data = this.dataStorage.getData();
     for (let index = this.startIndex; index < this.startIndex + SHOW_CARDS_COUNT; index++) {
      const element = data[index];
      const templateNewsCard = this.newsCard.getTemplate(element);
      this.cardListElement.insertAdjacentHTML('beforeend', templateNewsCard);
    }
    this.startIndex += SHOW_CARDS_COUNT + 1;
  }

  getNewsFromServer() {
    this.openPreloader();
    this.startIndex = 0;
    this.dataStorage.removeData();
    this.newsApi.getNews(this.inputSearchElement.value).then(res => {
      this.closePreloader();
      if (res.totalResults !== 0) {
        this.dataStorage.setData(res.articles);
        this.addCardNews();
        this.searchingResultsElement.classList.add(this.showClassName);
      } else {
        this.openSearchResalEmptyElement();
      }
    })
  }

  // TODO можно в одином классе объединить
  // TODO перенсти в отдельный класс
  openPreloader() {
    this.preloaderElement.classList.add(this.showClassName);
  }
  // TODO перенсти в отдельный класс
  closePreloader() {
    this.preloaderElement.classList.remove(this.showClassName);
  }
  // TODO перенсти в отдельный класс
  openSearchResalEmptyElement() {
    this.searchResalEmptyElement.classList.add(this.showClassName);
  }
  // TODO перенсти в отдельный класс
  closeSearchResalEmptyElement() {
    this.searchResalEmptyElement.classList.remove(this.showClassName);
  }

  resetCardListElement() {
    this.searchingResultsElement.classList.remove(this.showClassName);
    while (this.cardListElement.firstChild) {
      this.cardListElement.removeChild(this.cardListElement.firstChild);
    }
  }
}
