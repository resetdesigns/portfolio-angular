import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: '1q8fb1hdekqp',
  accessToken: 'TyNRjeXVFMFBO6BPfyPKeh5DKMFj5znZM0bxDDpWo4k',

  contentTypeIds: {
    page: 'structurePage',
  },
};

@Injectable({
  providedIn: 'root',
})
export class ContentfulApiService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  });

  constructor() {}

  getPages(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.page,
          },
          query
        )
      )
      .then((res) => res.items);
  }
}
