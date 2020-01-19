import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { GoogleGtagService } from './google-analytics/google-gtag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _router: Router, private _googleGtagService: GoogleGtagService) {

    _router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        let fullURL = event.urlAfterRedirects;
        let rootURL = _googleGtagService.getRootUrl(fullURL);
        _googleGtagService.sendPageView(rootURL);
      }
    });

  }
}
