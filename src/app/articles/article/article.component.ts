import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article = {
    name: '',
    description: '',
    author: '',
    date: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
