import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-source',
  templateUrl: './lead-source.page.html',
  styleUrls: ['./lead-source.page.scss'],
})
export class LeadSourcePage implements OnInit {

  public leadSources = [
    { value: 'Magic Bricks', enabled: true },
    { value: 'No Broker', enabled: true },
    { value: 'Facebook', enabled: true },
    { value: 'ABC Company', enabled: true },
    { value: 'Test Xy', enabled: true },
  ];
  constructor() { }

  ngOnInit() {
  }

  addLocation(location) {
    this.leadSources.unshift({value: location, enabled: true});
  }

  onChangeStatus(index, value) {
    console.log(index, value);
    this.leadSources[index].enabled = !value;
  }

}
