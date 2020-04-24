const newsDataKey = 'newsDataKey';

export default class DataStorage {
  constructor() {

  }
  setData(data) {
    localStorage.setItem(newsDataKey, JSON.stringify(data));
  }

  getData() {
    return JSON.parse(localStorage.getItem(newsDataKey));
  }

  removeData() {
    localStorage.removeItem(newsDataKey);
  }
}
