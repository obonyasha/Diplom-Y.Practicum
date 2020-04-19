export default class CommitCardList {
  constructor(commitListElement, commitCard, githubApi) {
    this.commitListElement = commitListElement;
    this.commitCard = commitCard;
    this.githubApi = githubApi;
  }

  addCardCommits(data) {
    for (const element of data) {
      const templateCommitsCard = this.commitCard.getTemplate(element);
      this.commitListElement.insertAdjacentHTML('beforeend', templateCommitsCard);
    }
  }

  getCommitsFromServer() {
    this.githubApi.getCommits().then(res => {
      this.addCardCommits(res.commit);
    })
  }
}
