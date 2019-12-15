import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {trigger, transition, style, animate, state} from '@angular/animations'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({
        height: '*',
      })),
      state('false', style({
        height: '0px',
      })),
      transition('true <=> false', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class NavigationMobileComponent implements OnInit {
  @ViewChild('content', {static: false}) menuContent: ElementRef;

  showMobileMenu = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMobileMenu(){
    this.showMobileMenu = !this.showMobileMenu;
  }
}
