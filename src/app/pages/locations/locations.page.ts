import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations = [
    { value: 'Delhi', enabled: true },
    { value: 'Bangalore', enabled: true },
    { value: 'Amritsar', enabled: true },
    { value: 'Kanpur', enabled: true },
    { value: 'Chandigarh', enabled: true },
  ];
  constructor() {}

  ngOnInit() {}

  addLocation(location) {
    this.locations.unshift({value: location, enabled: true});
  }

  onChangeStatus(index, value) {
    console.log(index, value);
    this.locations[index].enabled = !value;
  }
}
