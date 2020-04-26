export default class PublicationDate {
  constructor() { }

  getDateCommit(data) {
    const publicationDate = new Date(data.commit.committer.date);
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
    ];
    const year = publicationDate.getFullYear();
    const date = publicationDate.getDate();
    const monthName = months[publicationDate.getMonth()];
    const formatted = `${date} ${monthName}, ${year}`;

    return formatted;
  }

  getDateNews(data) {
    const publicationDate = new Date(data.publishedAt);
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
    ];
    const year = publicationDate.getFullYear();
    const date = publicationDate.getDate();
    const monthName = months[publicationDate.getMonth()];
    const formatted = `${date} ${monthName}, ${year}`;

    return formatted;
  }


  getCustomDay(daysObj) {
    const days = [
      'ВС',
      'ПН',
      'ВТ',
      'СР',
      'ЧТ',
      'ПТ',
      'СБ'
    ];
    const date = daysObj.getDate();
    const dayName = days[daysObj.getDay()];
    const formatted = `${dayName}, ${date}`

    return formatted;
  }
}
