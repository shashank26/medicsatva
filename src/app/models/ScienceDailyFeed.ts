export class ScienceDailyFeed {
  title: string;
  description: string;
  publishedDate: string;
  link: string;

  constructor(
    title: string,
    description: string,
    publishedDate: Date,
    link: string
  ) {
    this.description = description;
    this.title = title;
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    this.publishedDate = `${
      months[publishedDate.getMonth()]
    } ${publishedDate.getDate()} ${publishedDate.getFullYear()}`;

    this.link = link;
  }
}
