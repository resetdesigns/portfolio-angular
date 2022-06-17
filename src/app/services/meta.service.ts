import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// import { META_INFO } from './meta.config';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private title: Title, private meta: Meta) {}

  async updateMeta(META_INFO: any, route: string) {
    if (Object.prototype.hasOwnProperty.call(META_INFO, route)) {
      const { title, description } = META_INFO[route];
      // console.log(route, title, description);
      this.updateTitle(title);
      this.updateDescription(description);
    }
  }

  updateTitle(title: string) {
    if (title) {
      this.title.setTitle(title);
    }
  }

  updateDescription(description: string) {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }
}
