import "./style.css";

const commitListElement = document.querySelector('.main-carousel');

const flkty = new Flickity( commitListElement, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true
});

import PublicationDate from "../js/utils/PublicationDate";
import CommitCard from "../js/components/CommitCard";
import CommitCardList from "../js/components/CommitCardList";
import GithubApi from "../js/modules/GithubApi";

const publicationDate = new PublicationDate();
const commitCard = new CommitCard(publicationDate);
const githubApi = new GithubApi();
const commitCardList = new CommitCardList(commitListElement, commitCard, githubApi, flkty);

commitCardList.getCommitsFromServer();

