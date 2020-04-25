import "./style.css";

import NewsCard from "./js/components/NewsCard";
import NewsCardList from "./js/components/NewsCardList";
import NewsApi from "./js/modules/NewsApi";
import SearchInput from "./js/components/SearchInput";
import DataStorage from "./js/modules/DataStorage";
import SearchResalEmpty from "./js/components/SearchResalEmpty";
import Preloader from "./js/components/Preloader";
import PublicationDate from "./js/utils/PublicationDate";


const cardListElement = document.querySelector('.searching-results__container');
const searchForm = document.querySelector('.search__form');
const inputSearchElement = document.querySelector('.search__input');
const buttonElement = document.querySelector('.search__button');
const errorElement = document.querySelector('.error-message');
const searchResalEmptyElement = document.querySelector('.search-result-empty');
const searchingResultsElement = document.querySelector('.searching-results');
const preloaderElement = document.querySelector('.preloader');
const SHOW_MORE_BTN = document.querySelector('.searching-results__btn-show-more');

const publicationDate = new PublicationDate();
const searchResalEmpty = new SearchResalEmpty(searchResalEmptyElement, 'open');
const preloader = new Preloader(preloaderElement, 'open');
const dataStorage = new DataStorage();
const newsCard = new NewsCard(publicationDate);
const searchInput = new SearchInput(/*newsCardList, */inputSearchElement, buttonElement, errorElement);
const newsApi = new NewsApi(
  {
    baseUrl: 'https://newsapi.org/v2',
    headers: null,
    apiKey: 'eb6322f065ff4b42adee81ee18055e29',
    pageSize: 100
  }
);
const newsCardList = new NewsCardList({
  cardListElement,
  newsCard,
  newsApi,
  searchInput,
  searchResalEmpty,
  preloader,
  searchingResultsElement,
  preloaderElement,
  dataStorage,
  showMoreBtn: SHOW_MORE_BTN,
  showClassName: 'open'
});


searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  newsCardList.getNewsFromServer();
}
);
