import "./style.css";

import NewsCard from "./js/components/NewsCard";
import NewsCardList from "./js/components/NewsCardList";
import NewsApi from "./js/modules/NewsApi";

const cardListElement = document.querySelector('.searching-results__container');
const inputSearchElement = document.querySelector('.search__input');


const newsCard = new NewsCard();
const newsApi = new NewsApi(
  {
    baseUrl: 'https://newsapi.org/v2',
    headers: null,
    apiKey: 'eb6322f065ff4b42adee81ee18055e29',
    pageSize: 100
  }
);
const newsCardList = new NewsCardList(cardListElement, newsCard, newsApi, inputSearchElement);

newsCardList.getNewsFromServer();
