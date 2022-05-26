import { Component, OnInit } from '@angular/core';
import { ContentfulApiService } from './services/contentful-api.service';
import { Entry } from 'contentful';
import { Global } from './common/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'jv-portfolio';
  pages: Entry<any>[] = [];

  constructor(private contentfulAPI: ContentfulApiService) {}

  ngOnInit() {
    // this.contentfulAPI.getPages().then((pages) => (this.pages = pages));
    console.log(Global.pageInfo);
  }
}
