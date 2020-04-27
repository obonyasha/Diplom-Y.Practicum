import {COUNT_COMMITS} from "../constants/constants.js";

export default class ArrayCommit {
  constructor() {}

  getArrayCommit(data){
    const data_20 = data.splice(0,COUNT_COMMITS);
    return data_20;
  }
}
