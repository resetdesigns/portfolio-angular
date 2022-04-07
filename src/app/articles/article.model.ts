export class Article {
  public name: string;
  public description: string;
  public author: string;
  public date: string;

  constructor(name: string, description: string, author: string, date: string) {
    this.name = name;
    this.description = description;
    this.author = author;
    this.date = date;
  }
}
