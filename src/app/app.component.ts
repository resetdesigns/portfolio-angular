import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';
import { MetaService } from './services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private metaService: MetaService) {}

  ngOnInit() {
    // this.router.events
    //   .pipe(filter(event) => event instanceof NavigationEnd),
    //   pluck('urlAfterRedirects'),
    //   tap((data:string) => this.metaService.updateMeta(data));
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // console.log(event.url);
        this.metaService.updateMeta(event.url);
      }
    });
  }
}
