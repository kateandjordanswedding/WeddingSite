import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  $timeToWedding = interval(0, 1000).pipe(map(x=> this.getTimeRemaining()));

  constructor() { }

  ngOnInit() {
    console.log(this.getTimeRemaining())
  }

  getTimeRemaining() {
    var t = new Date("2020-05-23T14:00:00.000Z").getTime() - new Date().getTime();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

}
