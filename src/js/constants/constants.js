const DAYS_AGO = 6; //кол-во дней до текущей даты запроса
const PAGE_SIZE = 100; //кол-во отображаемых новостей
const SHOW_CARDS_COUNT = 3; //кол-во новостей, отображаемых за одну итерацию
const COUNT_COMMITS = 20; //кол-во отображаемых коммитов
const NEWS_DATA_KEY = 'newsDataKey';
const INPUT_VALUE_KEY = 'inputValueKey';
const TOTAL_RESULTS = 'totalResults';
const CARD_LIST_ELEMENT = document.querySelector('.searching-results__container');
const SEARCH_FORM = document.querySelector('.search__form');
const INPUT_SEARCH_ELEMENT = document.querySelector('.search__input');
const BTN_SEARH_ELEMENT = document.querySelector('.search__button');
const ERROR_ELEMENT = document.querySelector('.error-message');
const SEARCHING_RESULT_EMPTI_ELEMENT = document.querySelector('.search-result-empty');
const SEARCHING_RESULTS_ELEMENT  = document.querySelector('.searching-results');
const PRELOADER_ELEMENT = document.querySelector('.preloader');
const BTN_SHOW_MORE = document.querySelector('.searching-results__btn-show-more');
const BARCHART_ELEMENT = document.querySelector('.barchart__body');
const SCALE_TOP_ELEMENT = document.querySelector('.scale__top');
const SCALE_BOTTOM_ELEMENT = document.querySelector('.scale__bottom');
const TITLE_HEADER_ELEMENT = document.querySelector('.title-m_analytics-header');
const SUBTITLE_NEWS_ELEMENT = document.querySelector('.count__title');
const TOTAL_RESULTS_ELEMENT = document.querySelector('.total-results');
const COMMIT_LIST_ELEMENT = document.querySelector('.main-carousel');

export {NEWS_DATA_KEY, INPUT_VALUE_KEY, TOTAL_RESULTS};
export {COUNT_COMMITS, COMMIT_LIST_ELEMENT};
export {DAYS_AGO, PAGE_SIZE, CARD_LIST_ELEMENT, SEARCH_FORM, INPUT_SEARCH_ELEMENT, BTN_SEARH_ELEMENT, ERROR_ELEMENT,
        SEARCHING_RESULT_EMPTI_ELEMENT, SEARCHING_RESULTS_ELEMENT, PRELOADER_ELEMENT, BTN_SHOW_MORE, SHOW_CARDS_COUNT};

export {BARCHART_ELEMENT, SCALE_TOP_ELEMENT, SCALE_BOTTOM_ELEMENT, TITLE_HEADER_ELEMENT, SUBTITLE_NEWS_ELEMENT,
  TOTAL_RESULTS_ELEMENT};
