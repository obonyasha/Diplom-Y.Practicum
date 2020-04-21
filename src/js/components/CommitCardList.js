export default class CommitCardList {
  constructor(commitListElement, commitCard, githubApi, flkty) {
    this.commitListElement = commitListElement;
    this.commitCard = commitCard;
    this.githubApi = githubApi;
    this.flkty = flkty;
  }

  addCardCommits(data) {
    let allTemplates = '';
    const data_20 = data.splice(0,20);//превратить в метод и перенести во вспомогательный (наверно)
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
    return new DOMParser().parseFromString(str, 'text/html').body.childNodes; //метод перенести во вспомогательный (наверно)
  }
}
