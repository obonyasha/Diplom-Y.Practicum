const newsDataKey = 'newsDataKey';
const inputValueKey = 'inputValueKey';

export default class DataStorage {
  constructor() {
    //this.removeData();
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
  }

  setInputValue(inputValue) {
    localStorage.setItem(inputValueKey, JSON.stringify(inputValue));
  }

  getInputValue() {
    return JSON.parse(localStorage.getItem(inputValueKey));
  }

}
