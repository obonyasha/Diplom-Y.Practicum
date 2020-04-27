const newsDataKey = 'newsDataKey';
const inputValueKey = 'inputValueKey';
const totalResults = 'totalResults';

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
    localStorage.removeItem(inputValueKey);
    localStorage.removeItem(totalResults);
  }

  setInputValue(inputValue) {
    localStorage.setItem(inputValueKey, JSON.stringify(inputValue));
  }

  getInputValue() {
    return JSON.parse(localStorage.getItem(inputValueKey));
  }

  setTotalResults(data) {
    localStorage.setItem(totalResults, JSON.stringify(data));
  }

  getTotalResults() {
    return JSON.parse(localStorage.getItem(totalResults));
  }
}
