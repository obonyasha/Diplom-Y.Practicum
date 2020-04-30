import "./style.css";
import { COUNT_COMMITS, COMMIT_LIST_ELEMENT } from "../js/constants/constants.js";
import { ERROR_API, ERROR_API_VALUE } from "../js/constants/constants.js";
import PublicationDate from "../js/utils/PublicationDate";
import CommitCard from "../js/components/CommitCard";
import CommitCardList from "../js/components/CommitCardList";
import GithubApi from "../js/modules/GithubApi";
import ArrayCommits from "../js/utils/ArrayCommits";

const flkty = new Flickity(COMMIT_LIST_ELEMENT, {
  cellAlign: 'left',
  contain: true,
  wrapAround: true
});

const arrayCommits = new ArrayCommits(COUNT_COMMITS);
const publicationDate = new PublicationDate();
const commitCard = new CommitCard(publicationDate);
const githubApi = new GithubApi({
  errorApiElement: ERROR_API,
  showClassName: 'open',
  errorApiValue: ERROR_API_VALUE
});
const commitCardList = new CommitCardList({
  commitListElement: COMMIT_LIST_ELEMENT,
  commitCard,
  githubApi,
  flkty,
  arrayCommits,
  errorApiElement: ERROR_API,
  showClassName: 'open',
  errorApiValue: ERROR_API_VALUE
});

commitCardList.getCommitsFromServer(); //получение коммитов из гитхаба

