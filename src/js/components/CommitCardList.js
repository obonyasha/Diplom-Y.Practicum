export default class CommitCardList {
  constructor(commitListElement, commitCard, githubApi, flkty) {
    this.commitListElement = commitListElement;
    this.commitCard = commitCard;
    this.githubApi = githubApi;
    this.flkty = flkty;
  }

  addCardCommits(data) {
    let allTemplates = '';
    for (const element of data) {
      const templateCommitsCard = this.commitCard.getTemplate(element);
      allTemplates += templateCommitsCard;
    }
    this.flkty.prepend(this.getNodes(allTemplates));
  }

  getCommitsFromServer() {
    this.githubApi.getCommits().then(res => {
      debugger;
      this.addCardCommits(res);
    })
  }
  getNodes(str) {
    return new DOMParser().parseFromString(str, 'text/html').body.childNodes;
  }
}
