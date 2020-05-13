export default class CommitCardList {
  constructor(params) {
    this.commitListElement = params.commitListElement;
    this.commitCard = params.commitCard;
    this.githubApi = params.githubApi;
    this.flkty = params.flkty;
    this.arrayCommits = params.arrayCommits;
    this.errorApiElement = params.errorApiElement;
    this.showClassName = params.showClassName;
    this.errorApiValue = params.errorApiValue;
  }

  addCardCommits(commits) {
    let allTemplates = '';
    const commitsSegment = this.arrayCommits.getArrayCommit(commits);
    for (const element of commitsSegment) {
      const templateCommitsCard = this.commitCard.getTemplate(element);
      allTemplates += templateCommitsCard;
    }
    this.flkty.prepend(this.getNodes(allTemplates));
  }

  getCommitsFromServer() {
    this.githubApi.getCommits().then(res => {
      this.addCardCommits(res);
    })
    .catch((err) => {
      this.errorApiValue.textContent = err;
      this.errorApiElement.classList.add(this.showClassName);
      throw err;
    });
  }
  getNodes(str) {
    return new DOMParser().parseFromString(str, 'text/html').body.childNodes;
  }
}
