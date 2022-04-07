import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [
    new Article(
      'Test Article',
      'This is a test description for an article',
      'Joseph Villajin',
      '04/06/2022'
    ),
    new Article(
      'Article 2',
      'This is a test description for an article',
      'Joseph Villajin',
      '04/06/2022'
    ),
    new Article(
      'A third article?',
      'This is a test description for an article',
      'Joseph Villajin',
      '04/06/2022'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
