export default class NewsCard {
  constructor(publicationDate){
    this.publicationDate = publicationDate;
  }

  getTemplate(news) {
    const publicationDateNews = this.publicationDate.getDateNews(news);
    const template = `<div class="searching-results__card">
    <img src="${news.urlToImage}" alt="Searching results"
      class="searching-results__image">
    <div class="searching-results__info">
      <p class="searching-results__publication-date">${publicationDateNews}</p>
      <h2 class="title-s title_card">${news.title}</h2>
      <h3 class="subtitled-s subtitled_card">${news.description}</h3>
    </div>
    <p class="searching-results__source-name">${news.source.name}</p>
  </div>`
    return template;
  }
}
