export default class NewsCard {
  constructor(publicationDate,sanitizeHtml){
    this.publicationDate = publicationDate;
    this.sanitizeHtml = sanitizeHtml;
  }

  getTemplate(news) {
    const publicationDateNews = this.publicationDate.getDateNews(news);
    const template = `<div class="searching-results__card">
    <img src="${this.sanitizeHtml.sanitizeHtml(news.urlToImage)}" alt="Searching results"
      class="searching-results__image">
    <div class="searching-results__info">
      <p class="searching-results__publication-date">${this.sanitizeHtml.sanitizeHtml(publicationDateNews)}</p>
      <h2 class="title-s title_card">${this.sanitizeHtml.sanitizeHtml(news.title)}</h2>
      <h3 class="subtitled-s subtitled_card">${this.sanitizeHtml.sanitizeHtml(news.description)}</h3>
    </div>
    <p class="searching-results__source-name">${this.sanitizeHtml.sanitizeHtml(news.source.name)}</p>
  </div>`
    return template;
  }
}
