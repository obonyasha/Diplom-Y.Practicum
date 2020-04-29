import "./style.css";
import {DAYS_AGO, PAGE_SIZE, CARD_LIST_ELEMENT, SEARCH_FORM, INPUT_SEARCH_ELEMENT, BTN_SEARH_ELEMENT, ERROR_ELEMENT,
  SEARCHING_RESULT_EMPTI_ELEMENT, SEARCHING_RESULTS_ELEMENT, PRELOADER_ELEMENT, BTN_SHOW_MORE, SHOW_CARDS_COUNT
} from "./js/constants/constants.js";
import NewsCard from "./js/components/NewsCard";
import NewsCardList from "./js/components/NewsCardList";
import NewsApi from "./js/modules/NewsApi";
import SearchInput from "./js/components/SearchInput";
import DataStorage from "./js/modules/DataStorage";
import SearchResalEmpty from "./js/components/SearchResalEmpty";
import Preloader from "./js/components/Preloader";
import PublicationDate from "./js/utils/PublicationDate";

const publicationDate = new PublicationDate();
const searchResalEmpty = new SearchResalEmpty(SEARCHING_RESULT_EMPTI_ELEMENT, 'open');
const preloader = new Preloader(PRELOADER_ELEMENT, 'open');
const dataStorage = new DataStorage();
const newsCard = new NewsCard(publicationDate);
const searchInput = new SearchInput({
  inputElement: INPUT_SEARCH_ELEMENT,
  buttonElement: BTN_SEARH_ELEMENT,
  errorElement: ERROR_ELEMENT,
  dataStorage
});
const newsApi = new NewsApi(
  {
    baseUrl: 'https://newsapi.org/v2',
    headers: null,
    apiKey: 'eb6322f065ff4b42adee81ee18055e29',
    pageSize: PAGE_SIZE,
    daysAgo: DAYS_AGO
  }
);
const newsCardList = new NewsCardList({
  cardListElement: CARD_LIST_ELEMENT,
  newsCard,
  newsApi,
  searchInput,
  searchResalEmpty,
  preloader,
  searchingResultsElement: SEARCHING_RESULTS_ELEMENT,
  preloaderElement: PRELOADER_ELEMENT,
  dataStorage,
  showMoreBtn: BTN_SHOW_MORE,
  showClassName: 'open',
  showCardsCount: SHOW_CARDS_COUNT
});


SEARCH_FORM.addEventListener('submit', function (event) {
  event.preventDefault();
  newsCardList.getNewsFromServer();
}
);
newsCardList.addCardNews();
searchInput.setInputValue();
