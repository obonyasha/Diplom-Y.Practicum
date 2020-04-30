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
    this.showCardsCount = params.showCardsCount;
    this.errorApiElement = params.errorApiElement;
    this.errorApiValue = params.errorApiValue;
    this.startIndex = 0;
    this._setHandlers();
  }

  _setHandlers() {
    this.showMoreBtn.addEventListener('click', this.addCardNews.bind(this));
  }

  addCardNews() {
    const news = this.dataStorage.getData();
    if (!news) {
      return;
    };
    const endCounterElements = news.length - this.startIndex;
    if (endCounterElements > this.showCardsCount) {
      for (let index = this.startIndex; index < this.startIndex + this.showCardsCount; index++) {
        this.showMoreBtn.classList.add(this.showClassName);
        const element = news[index];
        const templateNewsCard = this.newsCard.getTemplate(element);
        this.cardListElement.insertAdjacentHTML('beforeend', templateNewsCard);
      }
    } else {
      for (let index = this.startIndex; index < this.startIndex + endCounterElements; index++) {
        const element = news[index];
        const templateNewsCard = this.newsCard.getTemplate(element);
        this.cardListElement.insertAdjacentHTML('beforeend', templateNewsCard);
        this.showMoreBtn.classList.remove(this.showClassName);
      }
    }
    this.startIndex += this.showCardsCount;
    this.searchingResultsElement.classList.add(this.showClassName);
  }

  getNewsFromServer() {
    const inputValue = this.searchInput.getInputValue();
    this.clearData();
    this.preloader.openPreloader();
    this.newsApi.getNews(inputValue).then(res => {
      this.preloader.closePreloader();
      if (res.totalResults !== 0) {
        this.dataStorage.setTotalResults(res.totalResults);
        this.dataStorage.setData(res.articles);
        this.dataStorage.setInputValue(inputValue);
        this.addCardNews();
      } else {
        this.searchResalEmpty.openSearchResalEmptyElement();
      }
    })
    .catch((err) => {
      this.preloader.closePreloader();
      this.errorApiValue.textContent = err;
      this.errorApiElement.classList.add(this.showClassName);
      throw err;
    });
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
