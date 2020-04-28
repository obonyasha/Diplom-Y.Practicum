import {NEWS_DATA_KEY, INPUT_VALUE_KEY, TOTAL_RESULTS} from "../constants/constants.js";

export default class DataStorage {
  constructor() {
  }
  setData(data) {
    localStorage.setItem(NEWS_DATA_KEY, JSON.stringify(data));
  }

  getData() {
    return JSON.parse(localStorage.getItem(NEWS_DATA_KEY));
  }

  removeData() {
    localStorage.removeItem(NEWS_DATA_KEY);
    localStorage.removeItem(INPUT_VALUE_KEY);
    localStorage.removeItem(TOTAL_RESULTS);
  }

  setInputValue(inputValue) {
    localStorage.setItem(INPUT_VALUE_KEY, JSON.stringify(inputValue));
  }

  getInputValue() {
    return JSON.parse(localStorage.getItem(INPUT_VALUE_KEY));
  }

  setTotalResults(data) {
    localStorage.setItem(TOTAL_RESULTS, JSON.stringify(data));
  }

  getTotalResults() {
    return JSON.parse(localStorage.getItem(TOTAL_RESULTS));
  }
}
