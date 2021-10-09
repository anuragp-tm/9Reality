import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-input-details',
  templateUrl: './property-input-details.page.html',
  styleUrls: ['./property-input-details.page.scss'],
})
export class PropertyInputDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(event) {
    console.log('data');
  }

}
