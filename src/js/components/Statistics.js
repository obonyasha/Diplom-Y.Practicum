export default class Statistics {
  constructor(params) {
    this.dataStorage = params.dataStorage;
    this.publicationDate = params.publicationDate;
    this.statisticsElement = params.statisticsElement;
    this.barchartElement = params.barchartElement;
    this.titleHeaderElement = params.titleHeaderElement;
    this.subtitledNewsElement = params.subtitledNewsElement;
    this.totalResultsElement = params.totalResultsElement;
    this.totalSum = 0;
    this.countTitle = 0;
    this.analitycsDays = {};
    this.inputValue = this.dataStorage.getInputValue();
    this.totalResults = this.dataStorage.getTotalResults();
    this.calculateData();
  }

  calculateData() {
    const data = this.dataStorage.getData();
    if (!data || !this.inputValue) {
      return;
    };

    const analitycsDays = this.initAnalitycsDaysObj();
    let totalSum = 0;
    data.forEach(news => {
      const regEx = new RegExp(this.inputValue, 'gi');
      let countTitle = 0;
      let countDescription = 0;
      if (news.title.match(regEx)) {
        countTitle = news.title.match(regEx).length;
      }
      if (news.description.match(regEx)) {
        countDescription = news.description.match(regEx).length;
      }
      const sumCount = countTitle + countDescription;
      totalSum += sumCount;
      this.countTitle += countTitle;
      const publicationDate = new Date(`${news.publishedAt}`);
      const date = this.publicationDate.getCustomDay(publicationDate);

      /*analitycsDays[date] = !analitycsDays[date] ? sumCount : analitycsDays[date] + sumCount;*/

      if (!analitycsDays[date]) {
        analitycsDays[date] = sumCount;
      } else {
        analitycsDays[date] = analitycsDays[date] + sumCount;
      }
    });
    this.totalSum = totalSum;
    this.analitycsDays = analitycsDays;
  }

  initAnalitycsDaysObj() {
    const toDay = new Date();
    const fromDay = new Date();
    fromDay.setDate(new Date().getDate() - 6);
    const analitycsDays = {};
    while (fromDay <= toDay) {
      const day = this.publicationDate.getCustomDay(fromDay);
      analitycsDays[day] = 0;
      fromDay.setDate(fromDay.getDate() + 1);
    }
    return analitycsDays;
  }

  addRowBarchart(date, count, percent) {
    const templateBarchart = this.statisticsElement.getTemplateBarchartRow(date, count, percent);
    this.barchartElement.insertAdjacentHTML('beforeend', templateBarchart);
  }

  initBarchartList() {
    for (let key in this.analitycsDays) {
      const percent = this.analitycsDays[key] / this.totalSum * 100;
      this.addRowBarchart(key, this.analitycsDays[key], percent);
    }
  }

  initHeader() {
    this.titleHeaderElement.textContent = 'Вы' + ' ' + 'спросили' + ':' + ' ' + '«' + this.inputValue + '»';
    this.totalResultsElement.textContent = this.totalResults;
    this.subtitledNewsElement.textContent = this.countTitle;
  }

  getTemplateScale() {
    const templateScale = this.statisticsElement.getTemplateScale({
      25: this.totalSum * 0.25,
      50: this.totalSum * 0.5,
      75: this.totalSum * 0.75,
      100: this.totalSum
    });
    return templateScale;
  }
}
