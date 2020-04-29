import {COUNT_COMMITS} from "../constants/constants.js";

export default class ArrayCommit {
  constructor(countCommits) {
    this.countCommits = countCommits;
  }

  getArrayCommit(commits){
    const commitsSegment = commits.splice(0,this.countCommits);
    return commitsSegment;
  }
}
