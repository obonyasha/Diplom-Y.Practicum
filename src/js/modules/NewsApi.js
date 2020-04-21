export default class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.apiKey = options.apiKey;
    this.pageSize = options.pageSize;
    this.to = new Date();
    this.from = new Date();
    this.from.setDate(this.from.getDate()-6);
  }

  getNews(querySearch='кино') {
    return fetch(`${this.baseUrl}/everything?q=${querySearch}&from=${this.from.toISOString()}&to=${this.to.toISOString()}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`, {
      method: 'GET'
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Данные не получены. Ошибка: ${res.status}`);
      })
      .catch((err) => {
        alert(err);
        throw err;
      });
  }
}
