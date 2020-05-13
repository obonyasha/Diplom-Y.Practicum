import "./style.css";

import {BARCHART_ELEMENT, SCALE_TOP_ELEMENT, SCALE_BOTTOM_ELEMENT, TITLE_HEADER_ELEMENT, SUBTITLE_NEWS_ELEMENT,
  TOTAL_RESULTS_ELEMENT} from "../js/constants/constants.js";
import Statistics from "../js/components/Statistics";
import StatisticsElement from "../js/components/StatisticsElement";
import DataStorage from "../js/modules/DataStorage";
import PublicationDate from "../js/utils/PublicationDate";

const statisticsElement = new StatisticsElement();
const publicationDate = new PublicationDate();
const dataStorage = new DataStorage();
const statistics = new Statistics({
  dataStorage,
  publicationDate,
  statisticsElement,
  barchartElement: BARCHART_ELEMENT,
  scaleElement,
  titleHeaderElement: TITLE_HEADER_ELEMENT,
  subtitledNewsElement: SUBTITLE_NEWS_ELEMENT,
  totalResultsElement: TOTAL_RESULTS_ELEMENT
});
const scaleElement = statistics.getTemplateScale();

statistics.initBarchartList(); //построение графика статистики
statistics.initHeader(); //заполнение шапки страницы аналитики
SCALE_TOP_ELEMENT.insertAdjacentHTML('beforeend', scaleElement); //построение верхней шкалы
SCALE_BOTTOM_ELEMENT.insertAdjacentHTML('beforeend', scaleElement); //построение нижней шкалы


