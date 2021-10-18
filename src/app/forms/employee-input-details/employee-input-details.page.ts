import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-input-details',
  templateUrl: './employee-input-details.page.html',
  styleUrls: ['./employee-input-details.page.scss'],
})
export class EmployeeInputDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(event){
    console.log('data');
  }

}
