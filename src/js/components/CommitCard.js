export default class CommitCard {
  constructor(publicationDate, sanitizeHtml) {
    this.publicationDate = publicationDate;
    this.sanitizeHtml = sanitizeHtml;
  }

  getTemplate(commits) {
    const author = commits.author || commits.commit.author || {};
    const publicationDateCommit = this.publicationDate.getDateCommit(commits);
    const template = `<div class="commit-history__card carousel-cell">
    <div class="commit-history__data">
      <p class="commit-history__publication-date">${this.sanitizeHtml.sanitizeHtml(publicationDateCommit)}</p>
      <div class="author author_commit-history">
        <img src="${this.sanitizeHtml.sanitizeHtml(author.avatar_url)}" alt="Фото автора коммита" class="author__avatar author__avatar_github">
        <div class="author__info author__info_commit-history">
          <h2 class="title-s title-s_commit-history">${this.sanitizeHtml.sanitizeHtml(commits.commit.committer.name)}</h2>
          <a href="mailto:url(${this.sanitizeHtml.sanitizeHtml(commits.commit.committer.email)})" class="subtitled-s subtitled_commit-history">${this.sanitizeHtml.sanitizeHtml(commits.commit.committer.email)}</a>
        </div>
      </div>
      <p class="subtitled-s subtitled-s_commit-history">
        ${this.sanitizeHtml.sanitizeHtml(commits.commit.message)}
      </p>
    </div>
  </div>`
    return template;
  }
}


