import {COUNT_COMMITS} from "../constants/constants.js";

export default class ArrayCommit {
  constructor(count_commits) {
    this.count_commits = count_commits;
  }

  getArrayCommit(data){
    const data_20 = data.splice(0,this.count_commits);
    return data_20;
  }
}
