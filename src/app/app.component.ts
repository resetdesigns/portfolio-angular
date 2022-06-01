import { isPlatformServer } from '@angular/common';
import {
  Component,
  Inject,
  Injector,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import {
  makeStateKey,
  TransferState,
  Title,
  Meta,
} from '@angular/platform-browser';

const testStateKey = makeStateKey('TESTSTATE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private title: string = '';
  private description: string = '';

  constructor(
    private injector: Injector,
    private state: TransferState,
    @Inject(PLATFORM_ID) private platformid: Object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    if (isPlatformServer(this.platformid)) {
      const testStateJSON = this.injector.get('TESTSTATE')
        ? this.injector.get('TESTSTATE')
        : { not: 'available' };

      // this.state.get()
      this.state.set(testStateKey, testStateJSON);
    }
    const contentfulRes = this.state.get(testStateKey, <any>[]);
    // const res = contentfulRes[0].fields;
    this.titleService.setTitle(contentfulRes);
    // this.description = res.seoDescription;

    this.metaService.addTags([
      { name: 'keywords', content: 'Angular, Universal, Example' },
      { name: 'description', content: 'Angular Universal Example' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
