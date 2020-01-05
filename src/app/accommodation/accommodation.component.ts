import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

  venues : Venue[] = [
    new Venue('The Cow & Calf, Ilkey','https://www.innkeeperslodge.com/hotel/the-cow-calf-ilkley-west-yorkshire'),
    new Venue('The Black Hat, Ilkley','https://www.blackhatilkley.co.uk/'),
    new Venue('The Gin Lounge, Ilkley','https://www.theginloungeilkley.com/'),
    new Venue('The Best Western Craiglands Hotel, Ilkley','https://www.bestwestern.co.uk/hotels/best-western-plus-craiglands-hotel-84222'),
    new Venue('Chevin End Guest House, Menston','http://www.chevinendguesthouse.co.uk/'),
    new Venue('Horse & Farrier, Otley','http://www.markettowntaverns.co.uk/pub-and-bar-finder/yorkshire/horse-and-farrier/'),
    new Venue('Chevin Country Park Hotel & Spa, Otley','https://www.chevinhotel.co.uk/'),
    new Venue('Britannia Leeds Bradford Airport Hotel, Bramhope','https://www.britanniahotels.com/hotels/the-britannia-leeds-bradford-airport-hotel'),
  ];

  constructor() { }

  ngOnInit() {
  }

}

export class Venue{
  name : string;
  link: string;

  constructor(name: string, link: string) {
    this.name = name;
    this.link = link;
  }
}
