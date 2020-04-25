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

    const year = publicationDate.getFullYear().toString();
    const date = publicationDate.getDate().toString();
    const monthName = months[publicationDate.getMonth()].toString();
    const formatted = date + ' ' + monthName + ',' + ' ' + year;

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

    const year = publicationDate.getFullYear().toString();
    const date = publicationDate.getDate().toString();
    const monthName = months[publicationDate.getMonth()].toString();
    const formatted = date + ' ' + monthName + ',' + ' ' + year;

    return formatted;
  }


  getDay(data) {
    publicationDate = new Date(`${data.commit.committer.date}`);
    const days = [
      'ВС',
      'ПН',
      'ВТ',
      'СР',
      'ЧТ',
      'ПТ',
      'СБ'
    ];
    const dayName = days[date.getDay()];
    return dayName;
  }
}
