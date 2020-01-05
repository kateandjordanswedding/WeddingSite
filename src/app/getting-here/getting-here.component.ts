import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-getting-here',
  templateUrl: './getting-here.component.html',
  styleUrls: ['./getting-here.component.scss']
})
export class GettingHereComponent implements OnInit, AfterViewInit {

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: google.maps.Map;
  coordinates = new google.maps.LatLng(53.9338184, -1.7772053);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12,
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: 'Denton Hall'
  });

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

}
