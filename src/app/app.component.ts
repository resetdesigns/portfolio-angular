import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { MetaService } from './services/meta.service';
import { ScriptService } from './services/script-service';

const META_INFO_SCRIPT_PATH =
  'https://josephvillajin.com/js/plugins/meta.config.js';
declare let META_INFO: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptService,
    private router: Router,
    private metaService: MetaService
  ) {}

  ngOnInit() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      META_INFO_SCRIPT_PATH
    );
    scriptElement.onload = () => {
      console.log(META_INFO);
    };
    scriptElement.onerror = () => {
      console.log('Could not load the script!');
    };

    // this.router.events
    //   .pipe(filter(event) => event instanceof NavigationEnd),
    //   pluck('urlAfterRedirects'),
    //   tap((data:string) => this.metaService.updateMeta(data));
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.metaService.updateMeta(META_INFO, event.url);
      }
    });
  }
}
