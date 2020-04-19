export default class NewsCardList {
  constructor(cardListElement, newsCard, newsApi, inputSearchElement) {
    this.cardListElement = cardListElement;
    this.newsCard = newsCard;
    this.newsApi = newsApi;
    this.inputSearchElement = inputSearchElement;
  }

  addCardNews(data) {
    for (const element of data) {
      const templateNewsCard = this.newsCard.getTemplate(element);
      this.cardListElement.insertAdjacentHTML('beforeend', templateNewsCard);
    }
  }

  getNewsFromServer() {
    this.newsApi.getNews().then(res => {
      this.addCardNews(res.articles);
    })
  }
}
