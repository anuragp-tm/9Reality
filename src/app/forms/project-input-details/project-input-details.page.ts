import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-input-details',
  templateUrl: './project-input-details.page.html',
  styleUrls: ['./project-input-details.page.scss'],
})
export class ProjectInputDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(event) {
    console.log('data');
  }

}
