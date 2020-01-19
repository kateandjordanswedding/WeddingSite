import { Injectable } from '@angular/core';
import { Router, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleGtagService {

  constructor(private _router: Router) { }

  sendPageView(path: string) {
    if (environment.production) {
      console.log('Sending gtag: ' + path);
      gtag('config', 'UA-156513891-1', { 'page_path': path });
    }
  }

  getRootUrl(url: string) {
    let retVal = '/';
    let urlSegmentGroup: UrlSegmentGroup = this._router.parseUrl(url).root.children[PRIMARY_OUTLET];
    if (urlSegmentGroup) {
      retVal += urlSegmentGroup.toString();
    }
    return retVal;
  }
}
