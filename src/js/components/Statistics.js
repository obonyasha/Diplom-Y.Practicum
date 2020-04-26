export default class Statistics {
  constructor(dataStorage, publicationDate, statisticsElement, barchartElement) {
    this.dataStorage = dataStorage;
    this.publicationDate = publicationDate;
    this.statisticsElement = statisticsElement;
    this.barchartElement = barchartElement;
    this.totalSum = 0;
    this.analitycsDays = {};
    this.calculateData();
  }

  calculateData() {
    const data = this.dataStorage.getData();
    const inputValue = this.dataStorage.getInputValue();
    if (!data || !inputValue) {
      return;
    };

    const analitycsDays = this.initAnalitycsDaysObj();
    let totalSum = 0;
    data.forEach(news => {
      const regEx = new RegExp(inputValue, 'gi');
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
