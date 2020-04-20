export default class GithubApi {
  constructor() {
  }

  getCommits() {
    return fetch("https://api.github.com/repos/obonyasha/Diplom-Y.Practicum/commits", {
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
