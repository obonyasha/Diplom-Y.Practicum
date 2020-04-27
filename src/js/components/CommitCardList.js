export default class CommitCardList {
  constructor(params) {
    this.commitListElement = params.commitListElement;
    this.commitCard = params.commitCard;
    this.githubApi = params.githubApi;
    this.flkty = params.flkty;
    this.arrayCommits = params.arrayCommits;
  }

  addCardCommits(data) {
    let allTemplates = '';
    const data_20 = this.arrayCommits.getArrayCommit(data);
    for (const element of data_20) {
      const templateCommitsCard = this.commitCard.getTemplate(element);
      allTemplates += templateCommitsCard;
    }
    this.flkty.prepend(this.getNodes(allTemplates));
  }

  getCommitsFromServer() {
    this.githubApi.getCommits().then(res => {
      this.addCardCommits(res);
    })
  }
  getNodes(str) {
    return new DOMParser().parseFromString(str, 'text/html').body.childNodes;
  }
}
