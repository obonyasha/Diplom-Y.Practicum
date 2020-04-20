import "./style.css";

const commitListElement = document.querySelector('.main-carousel');

const flkty = new Flickity( commitListElement, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true
});

import CommitCard from "../js/components/CommitCard";
import CommitCardList from "../js/components/CommitCardList";
import GithubApi from "../js/modules/GithubApi";

const commitCard = new CommitCard();
const githubApi = new GithubApi();
const commitCardList = new CommitCardList(commitListElement, commitCard, githubApi, flkty);

commitCardList.getCommitsFromServer();

