export default class NewsCard {
  constructor(){}

  getTemplate(data) {
    const template = `<div class="searching-results__card">
    <img src="url(${data.urlToImage})" alt="Searching results"
      class="searching-results__image">
    <div class="searching-results__info">
      <p class="searching-results__publication-date">${data.publishedAt}</p>
      <h2 class="title-s title_card">${data.title}</h2>
      <h3 class="subtitled-s subtitled_card">${data.description}</h3>
    </div>
    <p class="searching-results__source-name">${data.source.name}</p>
  </div>`
    return template;
  }
}
