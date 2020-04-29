export default class CommitCardList {
  constructor(params) {
    this.commitListElement = params.commitListElement;
    this.commitCard = params.commitCard;
    this.githubApi = params.githubApi;
    this.flkty = params.flkty;
    this.arrayCommits = params.arrayCommits;
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
      alert(err);
      throw err;
    });
  }
  getNodes(str) {
    return new DOMParser().parseFromString(str, 'text/html').body.childNodes;
  }
}
