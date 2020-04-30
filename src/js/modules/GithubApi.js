export default class GithubApi {
  constructor(options) {
    this.errorApiElement = options.errorApiElement;
    this.showClassName = options.showClassName;
    this.errorApiValue = options.errorApiValue;
  }

  getCommits() {
    return fetch("https://api.github.com/repos/obonyasha/Diplom-Y.Practicum/commits", {
      method: 'GET'
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Запрос завершился с ошибкой. Ошибка: ${res.status}`);
      })
      .catch((err) => {
        this.errorApiValue.textContent = err;
        this.errorApiElement.classList.add(this.showClassName);
        throw err;
      });
  }
}
