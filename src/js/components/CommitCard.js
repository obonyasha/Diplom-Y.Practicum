export default class CommitCard {
  constructor() { }

  getTemplate(data) {
    const template = `<div class="commit-history__card carousel-cell">
    <div class="commit-history__date">
      <p class="commit-history__publication-date">${data.commit.committer.date}</p>
      <div class="author author_commit-history">
        <img src="url(${data.author.avatar_url})" alt="Фото автора коммита" class="author__avatar author__avatar_github">
        <div class="author__info author__info_commit-history">
          <h2 class="title-s title-s_commit-history">${data.commit.committer.name}</h2>
          <a href="mailto:url(${data.commit.committer.email})" class="subtitled-s subtitled_commit-history">${data.commit.committer.email}</a>
        </div>
      </div>
      <p class="subtitled-s subtitled-s_commit-history">
        ${data.commit.message}
      </p>
    </div>
  </div>`
    return template;
  }
}
