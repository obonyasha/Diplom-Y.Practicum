export default class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.apiKey = options.apiKey;
    this.pageSize = options.pageSize;
    this.daysAgo = options.daysAgo;
    this.errorApiElement = options.errorApiElement;
    this.showClassName = options.showClassName;
    this.preloader = options.preloader;
    this.errorApiValue = options.errorApiValue;
    this.to = new Date();
    this.from = new Date();
    this.from.setDate(this.from.getDate() - this.daysAgo);
  }

  getNews(querySearch) {
    return fetch(`${this.baseUrl}/everything?q=${querySearch}&from=${this.from.toISOString()}&to=${this.to.toISOString()}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`, {
      method: 'GET'
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Запрос завершился с ошибкой. Ошибка: ${res.status}`);
      })
      .catch((err) => {
        this.preloader.closePreloader();
        this.errorApiValue.textContent = err;
        this.errorApiElement.classList.add(this.showClassName);
        throw err;
      });
  }
}
