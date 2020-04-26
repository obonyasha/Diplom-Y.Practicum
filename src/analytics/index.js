import "./style.css";
import "../blocks/statistics/statistics.js";

import Statistics from "../js/components/Statistics";
import StatisticsElement from "../js/components/StatisticsElement";
import DataStorage from "../js/modules/DataStorage";
import PublicationDate from "../js/utils/PublicationDate";


const barchartElement = document.querySelector('.barchart__body');
const scaleTopElement = document.querySelector('.scale__top');
const scaleBottomElement = document.querySelector('.scale__bottom');


const statisticsElement = new StatisticsElement();
const publicationDate = new PublicationDate();
const dataStorage = new DataStorage();
const statistics = new Statistics(dataStorage, publicationDate, statisticsElement, barchartElement, scaleElement);

statistics.initBarchartList();

const scaleElement = statistics.getTemplateScale();

scaleTopElement.insertAdjacentHTML('beforeend', scaleElement);
scaleBottomElement.insertAdjacentHTML('beforeend', scaleElement);


