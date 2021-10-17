import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.page.html',
  styleUrls: ['./property-type.page.scss'],
})
export class PropertyTypePage implements OnInit {

  public propertyType = [
    { value: 'Flat', enabled: true },
    { value: 'Bungalow', enabled: true },
    { value: 'Villa', enabled: true },
    { value: 'Resort', enabled: true },
    { value: 'Society', enabled: true },
  ];
  constructor() { }

  ngOnInit() {
  }

  addLocation(location) {
    this.propertyType.unshift({value: location, enabled: true});
  }

  onChangeStatus(index, value) {
    console.log(index, value);
    this.propertyType[index].enabled = !value;
  }

}
